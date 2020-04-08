const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

mongoose.Promise = global.Promise;
const model = mongoose.model;
const Schema = mongoose.Schema;
const DB_URI = process.env.DB_URI;

mongoose.connect("mongodb+srv://Server1:LaPass0102xD@chat-appdb-ws0bf.mongodb.net/test?retryWrites=true&w=majority", {
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

module.export = { Users, Messages }
