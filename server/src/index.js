import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './data/resolvers.js'
import fs from 'fs';

const typeDefs = fs.readFileSync("./src/data/schema.gql", "utf8");

const port = process.env.PORT || 4000;

const server = new GraphQLServer({ typeDefs, resolvers});

server.start({port},() => console.log(`Server Runing: localhost:${port}`));