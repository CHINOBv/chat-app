import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Chat from './chat/Chat.jsx'

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path= '/' render={ () => <Chat/>}/>
				</Switch>
			</Router>
		)
	}
}

export default Routes