
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

  for (let i = 0; i < objKeysMap.length; i++) {
    if (objKeysMap[i] === 1) {
      console.log(`there is ${objKeysMap[i]} ${objValuesMap[i]} in this band`);
    }
    else {
      console.log(`there are ${objKeysMap[i]} ${objValuesMap[i]}s in this band`);
    }
  }
}
const createBand = function (numberOfMembers) {
  let nameArray = [];
  let dict = {};
  for (let i = 0; i < numberOfMembers; i++) {
    const indexOfMusician = getRandomNumber(0, 7)
    randomIcon = Object.entries(musicians)[indexOfMusician][1];
    randomName = Object.entries(musicians)[indexOfMusician][0];
    nameArray.push(randomName);
    console.log(randomIcon);
  }
  for (let word of nameArray) {
    if (word in dict) {
      dict[word] += 1
    }
    else {
      dict[word] = 1
    }
  }
  printText(dict)
}

createBand(randomNumberBand)

