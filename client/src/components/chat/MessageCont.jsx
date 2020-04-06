import React from 'react'
import { Query } from 'react-apollo';
import { GET_USER_MESSAGE } from '../../querys';
import Message from './Message.jsx'

export class MessageCont extends React.Component {
	state={
		id:""
	}
	
	render() {
		

		const messages = this.props.messages;
		return (
			<div className="text-wrap">
				{messages.map( messages =>
					<Query 
						query={ GET_USER_MESSAGE }
						variables={{id:messages.user }}
						key={messages.id}
					>
				    	{({loading, error, data}) => {
							
				    		if(loading)	return null;
							 //console.log(data.getUserMessage)
							return(
								<Message 
									message={messages} 
									session={this.props.session} 
									userMessage={data.getUserMessage}
									/>
					       	)
				    		
			    		}}   

			       	</Query>
		       	)}
			</div>	
		)
	}
}

export default MessageCont