var express = require("express");
var app = express();
var catMe = require("cat-me");
var colors = require("colors");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
colors.setTheme({
  custom: ['bold', 'magenta']
});

app.get("/", function(req, res){
   res.render("landing"); 
});

var campgrounds = [
        {name: "salmon creek",  image: "https://farm2.staticflickr.com/1178/1132765088_6a09efbec5.jpg"},
        {name: "backwoods boys",image: "https://farm7.staticflickr.com/6068/6042217185_89a79dbc00.jpg"},
        {name: "uptown girls",  image: "https://farm9.staticflickr.com/8434/7626435028_ddfe733d71.jpg"},
        {name: "sandy beaches", image: "http://photosforclass.com/download/767161131"}
    ];
    
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds}); 
});

app.post("/campgrounds", function(req, res){
    //get data from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds 
    res.redirect("/campgrounds");
});    

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});    



app.listen(process.env.PORT, process.env.IP, function(){
    console.log('YELP CAMP SERVER YELP YELP CAMP SERVER '.custom);
    console.log(catMe('nyan').rainbow);
    console.log('YELP CAMP SERVER YELP YELP CAMP SERVER'.custom);
});