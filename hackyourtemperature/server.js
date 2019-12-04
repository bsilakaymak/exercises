'use strict';

const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const axios = require("axios");
const APIKEY = require('./sources/keys.json').API_KEY;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "handlebars");
app.engine("handlebars", hbs({ defaultLayout: "layout" }));

app.use(express.static("static"));

app.get("/", function(req, res) {
  const helloMessage = `Welcome to<br><br>WeatherApp`
  res.render("form", {helloMessage});
});

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  const cityUppercase = cityName.toUpperCase();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;
  axios.get(url).then(function(res){
    return res.data;
  }).then(function(data){
     const temperature = `Current Temperature in ${cityUppercase} : ${data.main.temp} °C `;
     const pressure = `Pressure: ${data.main.pressure}`;
     const humidity = `Humidity: ${data.main.humidity}`;
     const tempMin = `Minimum Temperature: ${data.main.temp_min} °C `;
     const tempMax = `Maximum Temperature: ${data.main.temp_max} °C `;
     const weatherForecast = {temperature, pressure, humidity, tempMin, tempMax, cityUppercase};
     res.render('form', weatherForecast)
  }).catch(function(err){
    console.log(err);
    const errMessage = `There has been an error : <br> ${err.response.status} ${err.response.statusText}`
    res.status(err.response.status);
    res.render('form', {errMessage});
  })


});

app.listen(8000, () => {
  console.log("Server started");
});
