const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://bharath:Livethegame14@firstclustertest.jgypz.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true, //*9 deprecated error fix
			useFindAndModify: false
		}
	)
	.then((x) => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	title: String,
	image: String,
	about: String
});

const authordata = mongoose.model('authordata', AuthorSchema);

module.exports = authordata;
