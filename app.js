const express = require('express'); //USING EXPRESS SERVER,THE SERVER USED FOR NODE.JS
const session=require('express-session');

const {spawn} = require('child_process');//

const port = 3000//

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
app.get('/test', (req, res) => {
  res.render('test')
})
app.get('/english', (req, res) => {

  var dataToSend;//
  // spawn new child process to call the python script
  const python = spawn('python', ['script1.py', 'c', '-dac']);//
  // collect data from script
  python.stdout.on('data', function (data) {//
   console.log('Pipe data from python script ...');//
   dataToSend = data.toString();//
 });
  
 
   python.on('close', (code) => {
     console.log(`child process close all stdio with code ${code}`);
     res.render('english', {data: dataToSend});
     //res.send(dataToSend)
     });

});
 

app.listen(port, () => console.log(`Example app listening on port 
${port}!`))
//app.listen(process.env.PORT || 3000);

//app.listen(3001, '0.0.0.0', function() {
 // console.log('Listening to port:  ' + 3001);
//});



