const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const dotenv = require ('dotenv');
dotenv.config();

mongoose.Promise = global.Promise;
const model = mongoose.model;
const Schema = mongoose.Schema;

const userDB = process.env.DB_USER;
const hostDB = process.env.DB_HOST;
const passDB = process.env.DB_PASS;

mongoose.connect(`mongodb://localhost:27017/test`, {
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

module.exports = { Users, Messages }
