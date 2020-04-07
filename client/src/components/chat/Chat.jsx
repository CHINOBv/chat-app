import React, { Fragment } from 'react'

import MessageCont from './MessageCont.jsx';
import MessageForm from './MessageForm.jsx';

export class Chat extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="uk-container">
					<MessageCont/>
					<MessageForm/>
				</div>
			</Fragment>
		)
	}
}

export default Chat