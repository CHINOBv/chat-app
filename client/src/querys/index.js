import gql from 'graphql-tag'

export const GET_MESSAGES = gql`
	query getMessages{
	  getMessages{
	  	id
	    user
	    text
	    date
	  }
	}		
`;

//export const GET_USERS