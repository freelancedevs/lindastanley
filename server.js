

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');



var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(allowCrossDomain);

app.post('https://httpbin.org/anything', (req,res)=>{
  console.log(req.body);
})
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`)
});




 


// Google maps api
function initMap(){
	var location = {lat: 39.382017, lng: -74.555795};
	var map = new google.maps.Map(document.getElementById("map"),
		{zoom: 15,
			center: location
		})
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
