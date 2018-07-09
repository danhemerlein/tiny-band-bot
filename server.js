
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

// Allow override of HTTP methods based on the query string ?_method=DELETE
app.use(methodOverride("_method"));

// Add the HTTP body onto the request object in all route handlers.
app.use(bodyParser.urlencoded({ extended: false }));

// adapted from code written by Eric Lewis: https://git.generalassemb.ly/wdi-nyc-tesseract/js-user-authentication-lab/blob/solution/views/home/index.ejs

// Allow the port to be set by an environment variable when run (PORT=4000 node server.js)
// and fallback to a default to 4567 if it's not supplied.

const PORT = process.env.PORT || 4567;

// Serve any files in the public folder at the "/client" route.
app.use(express.static('client'));

// Set the folder for where our views are.
app.set("views", path.join(__dirname, "views"));

// Tell Express that we use EJS in our views.
app.set("view engine", "ejs");


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});