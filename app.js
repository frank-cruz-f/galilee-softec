//Handles browser request for the react app.

const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 9080);

app.use('/', express.static('public'));
//app.use('/dist', express.static('dist'));
app.use('/css', express.static('css'));
app.use('/font-awesome', express.static('font-awesome'));
app.use('/js', express.static('js'));

/*// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve('public', 'index.html'))
})*/

const server = app.listen(app.get('port'), function(){
	console.log("App started");
});