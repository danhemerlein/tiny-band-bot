
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const keys = require('./config.js')
const Twitter = require('twitter');

const app = express();

const client = new Twitter({
  consumer_key: keys.consumerKey,
  consumer_secret: keys.consumerSecret,
  access_token_key: keys.accessToken,
  access_token_secret: keys.accessTokenSecret
});

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


const musicians = {
  trumpetPlayer: `
    o
   -|-🎺
   /\\
   `,

  guitarist: `
    o
   -|-🎸
   /\\
   `,
  pianist: `
    o
   -|-🎹
   /\\
   `,
  saxophonePlayer: `
    o
   -|-🎷
   /\\
   `,
  violinist: `
    o
   -|-🎻
   /\\
   `,
  drummer: `
    o
   -|-🥁
   /\\
   `,
  vocalist: `
    o
   -|-🎤
   /\\
   `,
  postalHornPlayer: `
    o
   -|-📯
   /\\
   `,
}

if (!Object.entries)
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array

    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
  };

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const indexOfMusician = getRandomNumber(0, 7)
const randomNumberBand = getRandomNumber(1, 8)

const printText = function (dictionary) {
  objValuesMap = Object.getOwnPropertyNames(dictionary);
  objKeysMap = Object.keys(dictionary).map((k) => dictionary[k]);
  result = [];
  for (let i = 0; i < objKeysMap.length; i++) {
    if (objKeysMap[i] === 1) {
       result.push(`there is ${objKeysMap[i]} ${objValuesMap[i]} in this band`);
    }
    else {
      result.push(`there are ${objKeysMap[i]} ${objValuesMap[i]}s in this band`);
    }
  }
  return result
}
const createBand = function (numberOfMembers) {
  let band = '';
  let nameArray = [];
  let dict = {};
  let result = {
    band: '',
    players: ''
  };

  for (let i = 0; i < numberOfMembers; i++) {
    const indexOfMusician = getRandomNumber(0, 7)
    randomIcon = Object.entries(musicians)[indexOfMusician][1];
    randomName = Object.entries(musicians)[indexOfMusician][0];
    nameArray.push(randomName);
    band += randomIcon;
  }
  for (let word of nameArray) {
    if (word in dict) {
      dict[word] += 1
    }
    else {
      dict[word] = 1
    }
  }

  
  result.band = band;
  result.players = printText(dict);
  // console.log(result);
  
  return result;

}

let band = createBand(randomNumberBand);

client.post('statuses/update', { status: `${band.band}${band.players}` }, function (error, tweet, response) {
  if (error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});