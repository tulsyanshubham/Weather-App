const express = require('express');
const path = require('path');
const requests = require('requests');
var hbs = require('hbs')

const app = express();
const statichome = path.join(__dirname,"../public")
app.use(express.static(statichome))

app.set('view engine', "hbs");
app.set('views',path.join(__dirname,'../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'));

app.get("/", (req, res) => {
    res.render('home');
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("*", (req, res) => {
    res.render('error');
})

const port = 8000;
app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})