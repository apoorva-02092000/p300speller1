const express = require('express'); //USING EXPRESS SERVER,THE SERVER USED FOR NODE.JS

//const session=require('express-session');
const serverles=require('serverless-http');
const app = express();
const router=express.Router();
router.get

module.exports.handler=serverles(app);

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

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/devanagri', (req, res) => {
  res.render('devanagri');
});

router.get('/english', (req, res) => {
  res.render('english');
});
 app.use('/.netlify/functions/api',router);

app.listen(process.env.PORT || 3000);

//app.listen(3001, '0.0.0.0', function() {
 // console.log('Listening to port:  ' + 3001);
//});



