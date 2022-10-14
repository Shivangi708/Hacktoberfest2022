const { response } = require('express');
const express = require('express');
 const app = express();
const https = require('https');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
});

   app.post("/",function(req,res){
    const query = req.body.cityName;
    const apikey = "732042fa120455e4bda9cf331f30fe18"
    const unit = metric;
    const url = "https://api.openweathermap.org/data/2.5/weather?q= " + query + " &appid = " + apikey;

     
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
    
            const temp = weatherData.main.temp
            console.log(temp);
    
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageurl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
    });

   

        res.write("<p>The weather is currently" + description + "</p>")

        res.write("<h1>The temperature in New Delhi is " + temp + " degrees Celsius.</h1> ")

        res.write("<img src="+ imageurl +">")

        res.send()


    });


})

   










app.listen(3000, function () {
    console.log("Server is ON!!");
});