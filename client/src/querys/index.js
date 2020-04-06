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

export const GET_USER_MESSAGE = gql`
	query getUserMessage ($id:ID) {
	  getUserMessage(id:$id){
	    username
	    name
	    id
	    rol
	  }
	}
`;