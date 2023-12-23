const express = require('express');
const requests = require('requests');
const path = require('path');

const app = express();
const statichome = path.join(__dirname,"../public")
app.use(express.static(statichome))

app.get("/", (req, res) => {
    res.send("home");
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