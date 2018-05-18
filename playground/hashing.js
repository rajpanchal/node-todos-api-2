const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = "raj";
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// })

var hashedPass = "$2a$10$3bMT0om6J/0Z5HCfmM9PEOI8v95gCFPgARZCV8BcSNODPQ3aP0X7i";

bcrypt.compare("raj", hashedPass, (err, res) => {
  console.log(res);
})

// var id = {
//   id = 10
// };
//
// var token = jwt.sign(id, "123qwerty");
// console.log(token);
// var decoded = jwt.verify(token, "123qwerty");
// console.log(decoded);
// var message = "Rish";
// var hash = SHA256(message).toString();
//
// // console.log(message);
// // console.log(hash);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
//
// var resultHash = (SHA256(JSON.stringify(token.data) + "somesecret").toString());
// if(token.hash === resultHash){
//   console.log("Data not modified.!");
// } else {
//   console.log("Data modified.!");
// }
