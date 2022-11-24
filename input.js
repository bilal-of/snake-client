
const handleUserInput = function (data) { 

  if (data === '\u0003') {
    console.log("Exiting") 
    process.exit()
  } 
  const obj = {w: "Move: up", a: "Move: left", s: "Move: down", d: "Move: right"} 
  const command = obj[data] 
  if (command) {  

    connection.write(command)
  }
  
};

// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) { 
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 
  stdin.on("data", handleUserInput);
  return stdin;
}; 

module.exports = {setupInput} 
