import React, { Fragment } from 'react'

import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../querys/index.js';

import MessageCont from './MessageCont.jsx';
import MessageForm from './MessageForm.jsx';

export class Chat extends React.Component {
	render() {
		return (
			<Fragment>
				<h1 className="uk-heading-line uk-text-center"><span>Mensajes</span></h1>
				<div className="uk-width-10-9@s uk-panel uk-panel-scrollable">
					<Query query={GET_MESSAGES} pollInterval={500}>
						{({loading, error, data, startPolling, stopPolling, refetch}) => {
							if(loading) return null;
							if(error) return `Error: ${error.message}`
							//console.log(data)
							if(data.getMessages){
								return(
									<MessageCont 
										session={this.props.session} 
										refetch={this.props.refetch} 
										messages={data.getMessages}
										/>
								)
							}
									
				       	}}
					</Query>
				</div>
					<hr/>
				<div className="uk-container uk-flex uk-flex-column uk-width-3-3 uk-margin">
					<MessageForm />				
				</div>
			</Fragment>
		)
	}
}

export default Chat