import React, {Fragment} from 'react';

import { Mutation } from 'react-apollo'
import { CREATE_MESSAGE } from '../../mutations/index.js'

const initState ={
	text: ''
}

export class MessageForm extends React.Component {
	state = {
		text: "",
		user: "5e86f9168d0c1c3a9511d17e"
	}
	
	validForm = () => {
		const {text} = this.state;
		
		const noValid = !text.trim();
		if(text.trim() === ""){
			return noValid;
		}
	}
	
	render() {
		return (
			
			<Mutation 
				mutation={ CREATE_MESSAGE }
				
				>
				{(createMessage, {loading, error, refetch}) => {
					return (
						<form
							onSubmit={ e => {
								e.preventDefault();
								const { text, user } = this.state;
								
									const input = {
										text, user
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

export default MessageForm