import React from 'react'
import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../querys/index.js'

export class MessageCont extends React.Component {
	render() {
		const { name } = this.props.session;
		return (
			<Query query={GET_MESSAGES} pollInterval={500}>
				{({loading, error, data, startPolling, stopPolling, refetch}) => {
					if(loading) return "Cargando...";
					if(error) return `Error: ${error.message}`
					//console.log(data)
					
					return(
						<div className="uk-align-center">
							{data.getMessages.map(message => {
								return(
								    
							       <p key={message.id}><span>{name}</span>{message.text}</p>
						       	)
							})}
						</div>
			       	)

				}}
			</Query>
		)
	}
}

export default MessageCont