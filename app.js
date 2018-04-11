const fs = require('fs');

let password = 'dette er en test123';
const encKey = new (require('./modules/EncryptionKeyCreator'))(password);





let enc = new (require('./modules/Encryption'))(encKey.get());

// let encStr = enc.encrypt('hei!');

// console.log(encStr.IV);

// fs.writeFileSync('./file.dat', encStr.IV);
let custIV = fs.readFileSync('./file.dat');

// console.log(encStr.crypted);

console.log(enc.decrypt('511e132e', custIV));   