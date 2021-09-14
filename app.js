const express = require('express'); //USING EXPRESS SERVER,THE SERVER USED FOR NODE.JS
const session=require('express-session');

const session=require('express-session');

const app = express();


app.use(express.static('public'));
app.use(express.static('javascriptfiles'));

app.set('view engine', 'ejs'); 

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/devanagri', (req, res) => {
  res.render('devanagri');
});

app.get('/english', (req, res) => {
  res.render('english');
});
 


app.listen(process.env.PORT || 3000);

//app.listen(3001, '0.0.0.0', function() {
 // console.log('Listening to port:  ' + 3001);
//});



