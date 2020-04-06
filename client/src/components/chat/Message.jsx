import React from 'react';


export class Message extends React.Component {
	render() {
		const { text, user } = this.props;
		return (
			<h1>{text}</h1>
		)
	}
}

export default Message