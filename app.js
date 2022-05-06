const express = require('express');
const path = require('path');
const cors = require('cors'); //?what is this
const bodyParser = require('body-parser'); //*2.Body parser not imported
const favicon = require('serve-favicon');
const port = process.env.PORT || 4000;
const nav = [
	{
		link: '/books',
		title: 'Books'
	},
	{
		link: '/authors',
		title: 'Authors'
	},
	{
		link: '/addbook',
		title: 'Add Book'
	},
	{
		link: '/addauthor',
		title: 'Add Author'
	}
];

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter'); //*(3) Spelling mistake
const booksRouter = require('./src/routes/booksroute')(nav);
const authorsRouter = require('./src/routes/authorsroute');

const app = new express();
app.use(favicon(path.join('public', 'favicon.ico')));
app.use(cors({ orgin: [ 'https://www.section.io', 'https://www.google.com/' ] })); //*7Cross Orgin Resource Sharing Enabled
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false })); //*(4)another error here
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/home', homeRouter);
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

app.get('/', function(req, res) {
	res.render('index', {});
});
app.get('/data', function(req, res) {
	res.send(nav);
});

app.listen(port, () => {
	console.log(`Server Ready on ${port}`); //*5sick joke error here
});
