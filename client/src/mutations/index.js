import gql from 'graphql-tag'

export const CREATE_MESSAGE = gql`
	mutation createMessage($input: MessageInput) {
	  createMessage(input: $input){
	    user
	    text
	    date
	  }
	}
`;

export const CREATE_USER = gql`
	mutation createUser($input: UserInput) {
	  createUser(input: $input)
	}
`;

export const AUTH_USER = gql`
	mutation authUser($username: String!, $password: String!){
	  authUser(username: $username, password: $password){
	    token
	  }
	}
	`;