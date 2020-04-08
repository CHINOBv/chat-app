import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

usersSchema.pre( 'save', function (next) {
//Si tiene hash no se vuelva a hashear
	if(!this.isModified('password')) {
		return next();
	}
	bcrypt.genSalt( 10, ( error, salt ) => {
		if(error) return next(error);
		bcrypt.hash( this.password, salt, (error, hash) => {
			if(error) return next(error);
			this.password = hash;
			next();
		});
	});
});


const Users = model( "users", usersSchema );

const messagesSchema = new Schema({
	user: mongoose.Types.ObjectId,
	text: String,
	date: Date
});

const Messages = model( "messages", messagesSchema );

export { Users, Messages }
