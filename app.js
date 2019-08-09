const 	express = require("express"),
	  	session = require('express-session'),
		mongoose = require("mongoose"),
		expressSanitizer = require("express-sanitizer"),
		request = require("request"),
		flash = require("connect-flash"),
		app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(flash());
app.use(session({
	secret: "Drink API",
	resave: false,
	saveUninitialized: false
}));
app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next){
	res.locals.error = req.flash("error");
	next();
});


app.get("/", function(req, res){
	res.render("landing", { message: req.flash('error') })
})


app.get('/results', function(req,res){
let drinkQuery = req.sanitize(req.query.drink);
	request("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkQuery, function(err, response, body){
	let parsedData = JSON.parse(body);
	if(err || parsedData.drinks === null){
            req.flash("error", "Invalid Drink Name");
            return res.redirect('/')
		}else if (!err && response.statusCode == 200){
			res.render("results", {drinks: parsedData});
		}
			
	})		
});

// PORT LISTEN
app.listen(process.env.PORT || 3000, function(){
	console.log("PORT CONNECTED");
});