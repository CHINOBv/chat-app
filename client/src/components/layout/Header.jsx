import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import CerrarSesion from './CerrarSesion.jsx'

const Header = ({session}) => {
  let barra;
  try {
    barra = (session.getUser) ? <NavAuth session={session}/> : <NavNoAuth/> ;
  } catch(e) {
    console.log(e);
  }
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
      <div className="container">
        {barra}
      </div>
    </nav>
  );
};

const NavNoAuth = () => (
 <h3 className="navbar-brand text-light font-weight-bold">
        Chat
      </h3>
);

const NavAuth = ({ session }) => (
  <Fragment>
    <Link to="/" className="navbar-brand text-light font-weight-bold">
        Chat
      </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navegacion"
      aria-controls="navegacion"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navegacion">
      <ul className="navbar-nav ml-auto text-right">
        <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
			<button className="btn btn-light ml-md-2 mt-2 mt-md-0 " >
				Opciones
			</button>
        </li>
        <CerrarSesion/>
      </ul>
    </div>
  </Fragment>

);

export default Header;