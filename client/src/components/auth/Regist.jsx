import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_USER } from '../../mutations/index.js';

const initState = {
	name: "",
	username: "",
	password: "",
	rpassword: "",
	rol: ""
}

export class Regist extends React.Component {
	state={
		...initState
	}
	
	updateState = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<Fragment>
					<h1 className="uk-position-top-center uk-margin">Registro</h1>
					<div className="uk-container uk-position-center uk-padding uk-margin">
						<Mutation mutation={CREATE_USER}>
								{( createUser, { loading, error }) =>{
									return (
								        <form className="uk-form uk-form-width-large">
											<input type="text" placeholder="Nombre" className="uk-input uk-margin-small uk-form-width-large" name="name" onChange={this.updateState}/>
											<input type="text" placeholder="Nombre de Usuario" uk-icon="icon-user" className="uk-input uk-margin-small uk-form-width-large" name="username" onChange={this.updateState}/>
											<input type="password" placeholder="Password" className="uk-input uk-margin-small uk-form-width-large" name="password" onChange={this.updateState}/>
											<input type="password" placeholder="Repetir Password" className="uk-input uk-margin-small uk-form-width-large" name="rpassword" onChange={this.updateState}/>
											<select name="rol" onChange={this.updateState}>
												<option>Elegir...</option>
												<option value="ADMIN">Administrador</option>
												<option value="USER">Usuario</option>
											</select>
											<input type="submit" value="Registrar" className="uk-button uk-button-primary uk-button-large uk-margin uk-flex"/>

										</form>
									)	
								}}
						</Mutation>
					</div>
			</Fragment>
		)
	}
}

export default Regist