import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Chat from './chat/Chat.jsx';
import Login from './auth/Login.jsx';
import Regist from './auth/Regist.jsx';

import Header from './layout/Header.jsx'

export class Routes extends React.Component {
	render() {
		
		let getUser;
		
		let rs;
		try {
			
			getUser = this.props.session.getUser;
			rs = (getUser) ? "" : <Redirect to="/login" />;
			
		} catch(e){ console.log(e) }

		return (
			<Router>
				{rs}
				<Header session={this.props.session}/>
				<Switch>
					<Route exact path= '/' render={ () => <Chat session={getUser} refetch={this.props.refetch}/>}/>
					<Route exact path= '/login' render={ () => <Login refetch={this.props.refetch} />}/>
					<Route exact path= '/registro' render={ () => <Regist/>}/>
				</Switch>
			</Router>
		)
	}
}

export default Routes