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