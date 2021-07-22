const express = require('express'); 
const app = express();

app.use(express.static('public'));
app.use(express.static('javascriptfiles'));

app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/devanagri', (req, res) => {
  res.render('devanagri');
});


app.listen(process.env.PORT || 3000);

