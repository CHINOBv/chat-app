import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import 'uikit/dist/css/uikit.min.css';

import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
	uri: "http://localhost:4000",

	fetchOptions: {
		credentials: 'include'
	},
	request: operation => {
		const token = localStorage.getItem('token');
		operation.setContext({
			headers:{
				authorization: token
			}
		});
	},

	cache: new InMemoryCache({
		addTypename: false},{
		connectToDevTools: true
	}),

	onError: ({ networkError, graphQLErrors }) => {
		console.log("Errors GQL: ", graphQLErrors);
		console.log("Errors NetWork: ", networkError)
	}
	
});

ReactDOM.render(
  <ApolloProvider client={client}>
  	<App/>
  </ApolloProvider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
