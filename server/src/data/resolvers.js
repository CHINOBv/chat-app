import mongoose from 'mongoose';
import { Users, Messages } from './db.js';

export const resolvers = {
	Query: {
		getUsers: (root) => {
			return Users.find({});
		},
		getUser: (root, { id }) => {
			return new Promise(( resole, object ) => {
				 Users.findById( id, ( error, User ) => {
				 	if (error) rejects(error);
				 	else resolve(User);
				 });
			});
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
		createUser: (root, { input }) => {
			const newUser = new Users({
				id: input.id,
				name: input.name,
				username: input.username,
				password: input.password,
				rol: input.rol
			});
		//Mongoose Genera el Id
			newUser.id = newUser._id;
			
			return new Promise(( resolve, object ) => {
				newUser.save(error => {
					if (error) rejects(error);
					else resolve(newUser);
				});
			});
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

		}
	}
};