const express = require('express'); 
const app = express();
const session=require('express-session');

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



