import React from 'react'


const Error = ({ error }) => {

	return (
		<div className="uk-alert-danger" uk-alert>
		    <button className="uk-alert-close" uk-close="true"></button>
		    <p>{error?.message}</p>
		</div>
	)
}

export default Error