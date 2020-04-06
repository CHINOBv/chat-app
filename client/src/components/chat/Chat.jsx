import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo';
import { GET_MESSAGES } from '../../querys/index.js';
import { CLEAR_CHAT } from '../../mutations/index.js'

import MessageCont from './MessageCont.jsx';
import MessageForm from './MessageForm.jsx';
import './Chat.css'

export class Chat extends React.Component {
	render() {

		let rol;
		try {
			rol = this.props.session.rol;
		} catch(e){
			return ''
		}
	//console.log(rol)
		let opt;
		if(rol === "ADMIN"){
			opt = 
			<Mutation mutation={CLEAR_CHAT}>
				{ clearChat => (
					<button
						className="btn btn-danger"
						onClick={ () => {
							if(window.confirm("Quieres Vaciar el Chat?")){
								clearChat().then( () => this.props.refetch())
							}
						}}
					>Vaciar Chat</button>
				)}
			</Mutation>
			;
		}

		return (
			<Fragment>
				<h1 className="uk-heading-line uk-text-center"><span>Mensajes</span></h1>
				<div className="uk-container uk-flex uk-flex-column uk-width-3-3 text-wraptext-break">
					<div className="uk-width-10-9@s uk-panel uk-panel-scrollable uk-container-large">
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
				</div>
						<hr/>
					<div className="uk-flex-column uk-flex uk-width-xlarge uk-container">
						<MessageForm session={this.props.session} refetch={this.props.refetch} />				
					</div>
					{opt}
			</Fragment>
		)
	}
}

export default withRouter(Chat)