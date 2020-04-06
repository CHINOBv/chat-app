import React from 'react';
import { withRouter } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import { CREATE_MESSAGE } from '../../mutations/index.js'

const initState ={
	text: ''
}

export class MessageForm extends React.Component {
	state = {
		text: ""
	}
	
	validForm = () => {
		const {text} = this.state;
		
		const noValid = !text.trim();
		if(text.trim() === ""){
			return noValid;
		}
	}
	
	render() {
								//console.log(this.props.session)
		return (
			
			<Mutation 
				mutation={ CREATE_MESSAGE }
				
				>
				{(createMessage, {loading, error, refetch}) => {
					return (
						<form
							onSubmit={ e => {
								e.preventDefault();
								const { text } = this.state;
									let id;
									try {
										id = this.props.session.id;
									} catch(e) {
										this.props.history.push('/login')
									}
								
									const input = {
										text, 
										user: id
									}
									createMessage({
										variables: {input}
									})
									this.setState({...initState})

							}}
							>
							<textarea
							name="text"
							className="uk-textarea"
							placeholder="Escribe Un Mensaje"
							onChange={ e => {
								this.setState({
									text: e.target.value
								})
							}}
							value={this.state.text}
								></textarea>
							
							<input 
								className="uk-button uk-button-primary uk-input uk-align-right"
								type="submit" 
								value="Enviar" 
								disabled={ loading || this.validForm()}/>
						</form>        
			        )
				}}
			</Mutation>
			
		)
	}
}

export default withRouter(MessageForm)