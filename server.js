const keys = require('./config.js')
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: keys.consumerKey,
  consumer_secret: keys.consumerSecret,
  access_token_key: keys.accessToken,
  access_token_secret: keys.accessTokenSecret
});

const musicians = {
  trumpetPlayingStickFigure: `
    o
   -|-🎺
   /\\
   `,

  guitarPlayingStickFigure: `
    o
   -|-🎸
   /\\
   `,
  pianoPlayingStickFigure: `
    o
   -|-🎹
   /\\
   `,
  saxophonePlayingStickFigure: `
    o
   -|-🎷
   /\\
   `,
  violinPlayingStickFigure: `
    o
   -|-🎻
   /\\
   `,
  drumPlayingStickFigure: `
    o
   -|-🥁
   /\\
   `,
  singingStickFigure: `
    o
   -|-🎤
   /\\
   `,
  postalHornPlayer: `
    o
   -|-📯
   /\\
   `,
  saxophonePlayingCaterpillar: `
    🎷🐛
   `,
  singingCaterpillar: `
    🎤🐛
   `,
  pianoPlayingCaterpillar: `
    🎹🐛
   `,
  drumPlayingCaterpillar: `
    🥁🐛
   `,
  saxophonePlayingUnicorn: `
    🎷🦄
   `,
  singingUnicorn: `
    🎤🦄
   `,
  pianoPlayingUnicorn: `
    🎹🦄
   `,
  drumPlayingUnicorn: `
    🥁🦄
   `,
  saxophonePlayingTurtle: `
    🎷🐢
   `,
  singingTurtle: `
    🎤🐢
   `,
  pianoPlayingTurtle: `
    🎹🐢
   `,
  drumPlayingTurtle: `
    🥁🐢
   `,
  saxophonePlayingDinosaur: `
    🎷🦖
   `,
  singingDinosaur: `
    🎤🦖
   `,
  pianoPlayingDinosaur: `
    🎹🦖
   `,
  drumPlayingDinosaur: `
    🥁🦖
   `,
  saxophonePlayingGiraffe: `
    🎷🦒
   `,
  singingGiraffe: `
    🎤🦒
   `,
  pianoPlayingGiraffe: `
    🎹🦒
   `,
  drumPlayingGiraffe: `
    🥁🦒
   `,
  saxophonePlayingDolphin: `
    🎷🐬
   `,
  singingDolphin: `
    🎤🐬
   `,
  pianoPlayingDolphin: `
    🎹🐬
   `,
  drumPlayingDolphin: `
    🥁🐬
   `,
  saxophonePlayingElephant: `
    🎷🐘
   `,
  singingElephant: `
    🎤🐘
   `,
  pianoPlayingElephant: `
    🎹🐘
   `,
  drumPlayingElephant: `
    🥁🐘
   `,
  saxophonePlayingDuck: `
    🎷🦆
   `,
  singingDuck: `
    🎤🦆
   `,
  pianoPlayingDuck: `
    🎹🦆
   `,
  drumPlayingDuck: `
    🥁🦆
   `,
  violinPlayingDuck: `
    🎻🦆
   `,
  guitarPlayingDuck: `
    🎸🦆
   `,
  saxophonePlayingTurkey: `
    🎷🦃
   `,
  singingTurkey: `
    🎤🦃
   `,
  pianoPlayingTurkey: `
    🎹🦃
   `,
  drumPlayingTurkey: `
    🥁🦃
   `,
  violinPlayingTurkey: `
    🎻🦃
   `,
  guitarPlayingTurkey: `
    🎸🦃
   `,
  saxophonePlayingParrot: `
    🎷🦜
   `,
  singingParrot: `
    🎤🦜
   `,
  pianoPlayingParrot: `
    🎹🦜
   `,
  drumPlayingParrot: `
    🥁🦜
   `,
  violinPlayingParrot: `
    🎻🦜
   `,
  guitarPlayingParrot: `
    🎸🦜
   `,
  saxophonePlayingDove: `
    🎷🕊
   `,
  singingDove: `
    🎤🕊
   `,
  pianoPlayingDove: `
    🎹🕊
   `,
  drumPlayingDove: `
    🥁🕊
   `,
  violinPlayingDove: `
    🎻🕊
   `,
  guitarPlayingDove: `
    🎸🕊
   `,
  saxophonePlayingBlowfish: `
    🎷🐡
   `,
  singingBlowfish: `
    🎤🐡
   `,
  pianoPlayingBlowfish: `
    🎹🐡
   `,
  drumPlayingBlowfish: `
    🥁🐡
   `,
  violinPlayingBlowfish: `
    🎻🐡
   `,
  guitarPlayingBlowfish: `
    🎸🐡
   `,
  saxophonePlayingCamel: `
    🎷🐪
   `,
  singingCamel: `
    🎤🐪
   `,
  pianoPlayingCamel: `
    🎹🐪
   `,
  drumPlayingCamel: `
    🥁🐪
   `,
  violinPlayingCamel: `
    🎻🐪
   `,
  guitarPlayingCamel: `
    🎸🐪
   `,
  postalHornPlayingSnail: `
    🐌📯
   `,
  postalHornPlayingOwl: `
    🦉📯
   `,
  postalHornPlayingLizzard: `
    🦎📯
   `
};

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

const randomNumberBand = getRandomNumber(1, 6)

const printText = function (dictionary) {
  objValuesMap = Object.getOwnPropertyNames(dictionary);
  objKeysMap = Object.keys(dictionary).map((k) => dictionary[k]);
  result = [];
  for (let i = 0; i < objKeysMap.length; i++) {
    if (objKeysMap[i] === 1) {
       result.push(`there is ${objKeysMap[i]} ${objValuesMap[i]} in this band \n`);
    }
    else {
      result.push(`there are ${objKeysMap[i]} ${objValuesMap[i]}s in this band \n`);
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
    const indexOfMusician = getRandomNumber(0, (Object.keys(musicians).length - 1));
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
  let players = String(printText(dict));
  let playersReplace = players.replace(/,/g,'');
  result.players = playersReplace
  
  return result;
}

let band = createBand(randomNumberBand);
console.log(band);
console.log(band.band);

// client.post('statuses/update', { status: `\n${band.band}${band.players}` }, function (error, tweet, response) {
//   if (error) {
//     console.log(error);
//     throw error;
//   }
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });
