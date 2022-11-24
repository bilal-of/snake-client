const net = require("net");  
const { IP, PORT } = require('./constants');
const { stdout } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  }); 
  conn.on("data", (data) => {
    console.log('data', data)
  }); 
  conn.on("connect", () => {
    console.log('Successfully connected to game server') 
    conn.write("Name: BOF") 
    // conn.write("Move: up") 
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 200)


  }); 

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
}; 



// setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume(); 
//   stdin.on("data", handleUserInput);
//   return stdin;
// }; 



 
module.exports = {connect} 
