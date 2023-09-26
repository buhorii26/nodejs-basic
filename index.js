// const message = (name) => {
//     console.log(`Hello ${name}`);
//  }
  
//  message('JavaScript');
// Object.getOwnPropertyNames(global);

const coffee = require('./coffee');
const tes = require('./lib/tes');
console.log(tes);
console.log(coffee);

const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);