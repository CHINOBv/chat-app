import mongoose from 'mongoose';
import { Users, Messages } from './db.js';
import bcrypt from 'bcrypt'

import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});

import jwt from 'jsonwebtoken';

const createToken = ( userLogin, secret, expiresIn ) => {
	const { username } = userLogin;
	//console.log(userLogin)

	return jwt.sign( { username }, secret, { expiresIn } );
}


export const resolvers = {
	Query: {
		getUsers: (root) => {
			return Users.find({});
		},
		getUser: (root, args, { userAct } ) => {
			if(!userAct){
				return null;
			}
			console.log(userAct)
			const user = Users.findOne({ user: userAct.user });

		},
		getMessages: (root) => {
			return Messages.find({});
		},
		getMessage: (root, { user }) => {
			return new Promise(( resole, object ) => {
				 Messages.findById( id, ( error, Messages ) => {
				 	if (error) rejects(error);
				 	else resolve(Messages);
				 });
			});
		},
	},

	Mutation: {
		createUser: async (root, { input:{username}, input }) => {
			const existUser = await Users.findOne({username});
			if(existUser){
				throw new Error('El Usuario ya existe');
			}

			const newUser = await new Users({
				name: input.name,
				username: input.username,
				password: input.password,
				rol: input.rol
			}).save();
			return "Creado Correctamente"
		},
		createMessage: (root, { input }) => {
			const newMessage = new Messages({
				user: input.user,
				text: input.text,
				date: new Date()
			});

			newMessage.id = newMessage._id;
			
			return new Promise(( resolve, object) => {
				newMessage.save((error) => {
					if(error) rejects(error);
					else resolve(newMessage);
				});
			});

		},
		authUser: async( root, { username, password } ) => {
			const nameUser = await Users.findOne({username});
			if(!nameUser){
				throw new Error("El Usuario No Existe");
			}
			const passwordCorrect = await bcrypt.compare( password, nameUser.password );
			if(!passwordCorrect){
				throw new Error("Password Incorrecto");
			}

			return {
				token: createToken( nameUser, process.env.SECRET, "24hr" )
			}
		}
	}
};