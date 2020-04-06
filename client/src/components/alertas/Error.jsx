import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({ error }) => {

	return (
		<div className="uk-alert-danger" uk-alert>
		    <Link className="uk-alert-close" uk-close="true"></Link>
		    <p>{error?.message}</p>
		</div>
	)
}

export default Error