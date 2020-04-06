import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Chat from './chat/Chat.jsx';
import Login from './auth/Login.jsx';
import Regist from './auth/Regist.jsx';

export class Routes extends React.Component {
	render() {
		
		const {getUser} = this.props.session;

		const message = (getUser) ? 
			`Nombre: ${getUser.name}` : 
				<Redirect to="/login" />;

		return (
			<Router>
				<Switch>
					<Route exact path= '/' render={ () => <Chat session={getUser} refetch={this.props.refetch}/>}/>
					<Route exact path= '/login' render={ () => <Login/>}/>
					<Route exact path= '/registro' render={ () => <Regist/>}/>
				</Switch>
			</Router>
		)
	}
}

export default Routes