import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './data/resolvers.js'
import jwt from 'jsonwebtoken';
import fs from 'fs';

const app = express();

const typeDefs = fs.readFileSync("./src/data/schema.gql", "utf8");

const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers, context: async({req}) => {
	
	const token = req.headers['authorization'];
	
	if(token !== "null"){
		
		try{
	
			const userAct = await jwt.verify( token ,process.env.SECRET );
			
			req.userAct = userAct;
			//console.log(userAct)

			return {
				userAct
			};


		}catch (error){
			console.error(error);
		}

	}

	//console.log(userAct)
} });

server.applyMiddleware({ app });

app.listen({ port }, () => console.log(`Server Runing ${server.graphqlPath}`));