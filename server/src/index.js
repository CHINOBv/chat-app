const express = require ('express');
const { ApolloServer } = require ('apollo-server-express');

const { resolvers } = require ('./data/resolvers.js');
const jwt = require ('jsonwebtoken');
const fs = require ('fs');

const app = express();

const typeDefs = fs.readFileSync("./src/data/schema.gql", "utf8");

const port = process.env.PORT || 4000;

//app.use('/', express.static(`${__dirname}/build`))

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