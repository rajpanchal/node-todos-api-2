const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");

var id = {
  id = 10
};

var token = jwt.sign(id, "123qwerty");
var decoded = jwt.verify(token, "123qwerty");

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
