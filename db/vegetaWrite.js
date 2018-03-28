const fs = require('fs');
const stream = fs.createWriteStream('/Users/stevehallam/go/src/vegeta/localWeightedModuleNuke.txt'); // absolute path to where you are running the vegeta go script. The txt file with all the ids to hit needs to be in there

const rand = (min, max) => (Math.random() * (max - min) + min);
const generatePseudoRandom = (weightCenter, max) => {
 const x = rand(0, 1);
 let result = 0;
 if (x <= weightCenter) {
   result = Math.floor(rand(1, Math.ceil(weightCenter * max)));
 } else {
   result = Math.floor(rand(((Math.ceil(weightCenter * max)) + 1), max));
 }
 return result;
};

const writer = (n = 1) => {
  let isReady = true;
  while (isReady && n < 3e6 + 1) {
    var randNum = generatePseudoRandom(0.85, 10000000);
    var url = `GET http://localhost:3006/api/neighborhood/${randNum}`;
    if (n !== 3e6 && n % 100) {
      for (let i =0; i < 1000; i++) {
        isReady = stream.write(`${url}\n`);
      }
      n += 1000;
    } else if (n !== 3e6) {
      isReady = stream.write(`${url}\n`);
    } else {
      isReady = stream.write(`${url}`);
    }
    n += 1;
  }
  stream.once('drain', () => {
    writer(n);
  });
  console.log('draining at ', n);
};

writer();

/* if (n !== 3e6 && n % 100) {
      for (let i =0; i < 1000; i++) {
        isReady = stream.write(`${url}\n`);
      }
      n += 1000;
    } else */