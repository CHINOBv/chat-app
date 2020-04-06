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

export const USER_ACT = gql`
	query getUser{
		getUser{
			name
			username
			rol
		}
	}
`;