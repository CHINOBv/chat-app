import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const model = mongoose.model;
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/chat", {
	useNewUrlParser: true,
	useCreateIndex: true
});

const usersSchema = new Schema({
	name: String,
	username: String,
	password: String,
	rol: String
});
const Users = model( "users", usersSchema );

const messagesSchema = new Schema({
	user: mongoose.Types.ObjectId,
	text: String,
	date: Date
});

const Messages = model( "messages", messagesSchema );

export { Users, Messages }
