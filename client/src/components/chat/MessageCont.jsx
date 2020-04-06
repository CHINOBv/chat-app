import React from 'react'
import { Query } from 'react-apollo';
import { GET_USER_MESSAGE } from '../../querys';
import Message from './Message.jsx'

export class MessageCont extends React.Component {
	state={
		id:""
	}
	
	render() {
		


		const { name } = this.props.session;
		let idU;

		//console.log(this.props.messages)
		return (
			<div className="uk-align-center">
					<Query 
						query={ GET_USER_MESSAGE }
						variables={{id: idU }}	
					>
				    	
				    	{({loading, error, data}) => {
				    		if(loading)	return null;
							
							const {text, user, id} = this.props.messages;
							const messages = this.props.messages;

							return(
							 messages.map( message => {
							this.idU=message.user;
				    		console.log(data)
								
				    			return(
				    				<Message key={message.id} text={message.text}/>
		    			       )
				    		})
				    		)
			    		}}   

			       	</Query>
			</div>	
		)
	}
}

export default MessageCont