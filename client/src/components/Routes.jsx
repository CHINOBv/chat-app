import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Chat from './chat/Chat.jsx';
import Login from './auth/Login.jsx';
import Regist from './auth/Regist.jsx';

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path= '/' render={ () => <Chat/>}/>
					<Route exact path= '/login' render={ () => <Login/>}/>
					<Route exact path= '/register' render={ () => <Regist/>}/>
				</Switch>
			</Router>
		)
	}
}

export default Routes