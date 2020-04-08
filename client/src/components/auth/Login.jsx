import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo';
import { AUTH_USER } from '../../mutations';

import Error from '../alertas/Error.jsx';

export class Login extends React.Component {
	render() {
		return (
			<Fragment>
				<h1 className="uk-position-top-center uk-margin">Registro</h1>
				<div className="uk-container uk-position-center uk-padding uk-margin">
					<form className="uk-form uk-form-width-large">
						<input 
							type="text"
							name="username"
							placeholder="Nombre de Usuario"
							className="uk-input uk-margin-small uk-form-width-large"
							onChange={this.updateState}
						/>
						<input 
							type="password"
							name="password"
							placeholder="Password"
							className="uk-input uk-margin-small uk-form-width-large"
							onChange={this.updateState}
						/>
						<button
							className="uk-button uk-button-primary"
							>Iniciar Sesion</button>
					</form>
				</div>
			</Fragment>
		)
	}
}

export default Login