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
				{(createMessage, {loading, error}) => {
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

							}}
							>
							<textarea
							name="text"
							cols="30" 
							rows="10" 
							placeholder="Escribe Un Mensaje"
							onChange={ e => {
								this.setState({
									text: e.target.value
								})
								}}
								></textarea>
							<input type="submit" value="Enviar" disabled={ loading || this.validForm()}/>
						</form>        
			        )
				}}
			</Mutation>
			
		)
	}
}

export default MessageForm