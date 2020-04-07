import React from 'react'
import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../querys/index.js'

export class MessageCont extends React.Component {
	render() {
		return (
			<Query query={GET_MESSAGES} pollInterval={500}>
				{({loading, error, data, startPolling, stopPolling}) => {
					if(loading) return "Cargando...";
					if(error) return `Error: ${error.message}`
					//console.log(data)

					return(
						<div>
							{
								data.getMessages.map(message => {
									return(
								       <p key={message.id}>{message.text}</p>
							       	)
								})
							}
						</div>
			       	)

				}}
			</Query>
		)
	}
}

export default MessageCont