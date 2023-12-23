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
    res.render('index');
})
app.get("/weather", (req, res) => {
    res.send("weather");
})
app.get("/about", (req, res) => {
    res.send("about");
})
app.get("*", (req, res) => {
    res.send("404 Not found");
})

const port = 8000;
app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})