const {connect} = require('./client');  
const {setupInput} = require('./input'); 


console.log("Connecting ...");

const connection123 = connect()
setupInput(connection123)