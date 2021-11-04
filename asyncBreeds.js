// asyncBreeds.js
const fs = require('fs');


const breedDetailsFromFile = function(breed,callbackAfterReadComplete) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callbackAfterReadComplete(data) ;    
  });
};

// const returnData = function(data) {
//   console.log('Return Value: ', data) 
// }

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', returnData);

module.exports = breedDetailsFromFile;