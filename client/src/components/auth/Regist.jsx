import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_USER } from '../../mutations/index.js';
import { withRouter } from 'react-router-dom'

import Error from '../alertas/Error.jsx'

const initState = {
	name: "",
	username: "",
	password: "",
	rpassword: "",
	rol: "",
	error: ""
}

export class Regist extends React.Component {
	state={
		...initState
	}

	validForm = () => {
		const { name, username, password, rpassword, rol } = this.state;
		const noValid =  !name.trim() || !username.trim() || !password.trim() || password !== rpassword || !rol.trim() ;
			
		return noValid;
	}
	
	updateState = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	}

	clearState = () => {
		this.setState({...initState});
	}

	Register = ( e, createUser ) => {
		e.preventDefault();
		createUser().then( data => {
			this.clearState();
			this.props.history.push('/login');
		}).catch( error => this.setState({error}) )
	}

	render() {
		const { name, username, password, rol, error } = this.state;
		const input = { 
			name, 
			username, 
			password, 
			rol
		};

		return (
			<Fragment>
					<h1 className="uk-position-top-center uk-margin">Registro</h1>
					<div className="uk-container uk-position-center uk-padding uk-margin">
						{error && <Error error={error}/>}
						<Mutation 
							mutation={CREATE_USER}
							variables={{input}}
							>
								{( createUser, { loading, error, data }) =>{
									return (
								        <form className="uk-form uk-form-width-large"
								        	onSubmit={ e => this.Register( e, createUser )}>
											<input type="text" placeholder="Nombre" className="uk-input uk-margin-small uk-form-width-large" name="name" onChange={this.updateState}/>
											<input type="text" placeholder="Nombre de Usuario" uk-icon="icon-user" className="uk-input uk-margin-small uk-form-width-large" name="username" onChange={this.updateState}/>
											<input type="password" placeholder="Password" className="uk-input uk-margin-small uk-form-width-large" name="password" onChange={this.updateState}/>
											<input type="password" placeholder="Repetir Password" className="uk-input uk-margin-small uk-form-width-large" name="rpassword" onChange={this.updateState}/>
											<select name="rol" 
												className="uk-select"
												onChange={this.updateState}>
												<option value=" ">Elegir...</option>
												<option value="USER">Usuario</option>
											</select>
											<button 
												type="submit" 
												className="uk-button uk-button-primary uk-button-large uk-margin uk-flex"
												disabled={this.validForm()}
												> 
												Crear Usuario </button>

										</form>
									)	
								}}
						</Mutation>
					</div>
			</Fragment>
		)
	}
}

export default withRouter(Regist)