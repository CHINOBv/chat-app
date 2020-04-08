import React from 'react'

const Error = ({ error }) => {

	return (
		<div className="uk-alert-danger" uk-alert>
		    <a className="uk-alert-close" uk-close="true"></a>
		    <p>Error: {error?.message}</p>
		</div>
	)
}

export default Error