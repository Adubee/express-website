const express = require('express');
const server = express();
const path = require('path')




// server.use('/', (req, res) => {
// 	res.send('Done');
// });


function homePageHandler(req, res){
	const homePagePath = path.join(__dirname,'assets','home.html')
	res.sendFile(homePagePath)
}
function contactPageHandler(req, res){
	const contactPagePath = path.join(__dirname,'assets','contact.html')
	res.sendFile(contactPagePath)
}
function servicePageHandler(req, res){
	const servicePagePath = path.join(__dirname,'assets','services.html')
	res.sendFile(servicePagePath)
}
function aboutPageHandler(req, res){
	const aboutPagePath = path.join(__dirname,'assets','about.html')
	res.sendFile(aboutPagePath)
}

server.get('/home', homePageHandler)
server.get('/about', aboutPageHandler)
server.get('/services', servicePageHandler)
server.get('/contact', contactPageHandler)
server.use('/', express.static(path.join(__dirname,'assets')))


server.listen('3000', 'localhost', () => {
	console.log('Server has started');
});
