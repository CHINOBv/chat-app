import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo';
import { AUTH_USER } from '../../mutations';

import Error from '../alertas/Error.jsx';

const initState = {
	username: "",
	password: "",
	error: ""
};

export class Login extends React.Component {
	state={
		...initState
	}

	updateState = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		})
	}

	clearState = () => {
		this.setState({
			...initState
		})
	}

	validForm = () => {
		const { username, password } = this.state;
		const noValid = !username.trim() || !password.trim();
		return noValid;
	}
	
	InitSession = ( e, authUser ) => {
		e.preventDefault();

		authUser().then( async({ data }) => {
			localStorage.setItem("token", data.authUser.token);

			await this.props.refetch();
			this.clearState();
			setTimeout( () => {
				this.props.history.push("/");
			}, 2000)
		}).catch( error => this.setState({error}) )
	}

	render() {
		const { username, password, error } = this.state;
		return (
			<Fragment>
				<h1 className="uk-position-top-center uk-margin">Registro</h1>
				<div className="uk-container uk-position-center uk-padding uk-margin">
					{ error && <Error error={error}/> }
					<Mutation
						mutation={AUTH_USER}
						variables={{ username, password }}
						>
						{(authUser, { loading, error, data }) => {

							return (
							        <form 
							        	className="uk-form uk-form-width-large"
							        	onSubmit={ e => this.InitSession( e, authUser )}
							        	>
								  	<div className="uk-margin">
								        <div className="uk-inline">
								            <span className="uk-form-icon" uk-icon="icon: user"></span>
											<input 
												type="text"
												name="username"
												placeholder="Nombre de Usuario"
												className="uk-input uk-margin-small uk-form-width-large"
												onChange={this.updateState}
											/>
										</div>
									</div>
									<div className="uk-margin">
								        <div className="uk-inline">
								            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
											<input 
												type="password"
												name="password"
												placeholder="Password"
												className="uk-input uk-margin-small uk-form-width-large"
												onChange={this.updateState}
											/>
										</div>
									</div>
									<button
										disabled={this.validForm()}
										className="uk-button uk-button-primary"
										>Iniciar Sesion</button>
								</form>
							)	
						}}
					</Mutation>
				</div>
			</Fragment>
		)
	}
}

export default Login