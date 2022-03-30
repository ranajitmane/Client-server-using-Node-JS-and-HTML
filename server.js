var express = require('express');
var app = express();
var path = require('path'); // needed this to define static path, script not loading on client otherwise

//JSON data
const data = require("./data/dummyJson.json");

// configuration for path
app.use(express.static(path.join(__dirname, './')));

// Routes
app.get('/', (req, res)=>{
	res.sendFile('./views/index.html', {
     root: './'
   })
})

app.get('/getData', (req, res)=>{
	console.log(data, 'data')
	res.send(data)
})

app.listen(5000, ()=>{
	console.log('server is running on 5000');
})