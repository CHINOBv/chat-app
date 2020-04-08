import React, { Fragment } from 'react'

import MessageCont from './MessageCont.jsx';
import MessageForm from './MessageForm.jsx';

export class Chat extends React.Component {
	render() {
		return (
			<Fragment>
				<h1 className="uk-heading-line uk-text-center"><span>Mensajes</span></h1>
				<div className="uk-width-10-9@s uk-panel uk-panel-scrollable">
					<MessageCont/>
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