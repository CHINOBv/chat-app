import React from 'react';
import { Query } from 'react-apollo';
import { USER_ACT } from '../querys/index.js'

const Session = Component => props =>{
	return (
		<Query query={ USER_ACT } >
			{({ loading, error, data, refetch }) => {
				if(loading)	return null;
			//console.log(data)
				return <Component {...props} refetch={refetch} session={data}/>
			}}
		</Query>
	)
}

export default Session