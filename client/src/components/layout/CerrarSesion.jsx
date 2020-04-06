import React from 'react'
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const cerrarSesionUsuario = (user, history) => {
	localStorage.removeItem("token");

	user.resetStore();
	history.push('/login')
}

const CerrarSesion = ({history}) => (
	
	<ApolloConsumer>
		{user => {

			return(
				
				<button 
					onClick={() => cerrarSesionUsuario(user, history)}
					className="btn btn-light ml-md-2 mt-2 mt-md-0 " >
					Cerrar Sesion
				</button>

			);
		}}
	</ApolloConsumer>

);

export default withRouter(CerrarSesion)