import React from 'react';
import { withRouter } from 'react-router-dom'

export class Message extends React.Component {

	render() {
			
			let id;
			//let name;
			try {
			
				id = this.props.session.id;
				//name = this.props.session.name;
				
			} catch(e) {
				this.props.history.push('/login')				
			}

			const { user, text } = this.props.message;
			const userMessage = this.props.userMessage;
			let Mname;

			if(userMessage){
				Mname = this.props.userMessage.name;
			}else {
				Mname = "El Usuario Ya No Existe"
			}
			if(id !== user){
				return (
				        <div className="text-break" >
				        	<p className="text-muted">{Mname}</p>
							<p>{text}</p>
						</div>
				);

			}else {
				return(
					<div>
						<p className="text-right text-break">{text}</p>
					</div>
				)
			}

	}


}

export default withRouter(Message);