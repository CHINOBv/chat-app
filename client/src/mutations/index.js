export const CREATE_MESSAGE = `
	mutation createMessage($input: MessageInput) {
	  createMessage(input: $input){
	    user
	    text
	    date
	  }
	}
`;