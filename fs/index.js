const fs = require('fs'); //deklarasi core modules fs
const { resolve } = require('path'); //deklarasi core modules path


//secara asynchronous tidak menggunakan resolve path
// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };
// fs.readFile('notes.txt','UTF-8', fileReadCallback);

//secara asynchronous menggunakan resolve path
const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);


//secara synchronous 
// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);