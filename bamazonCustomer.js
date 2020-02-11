var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SpiderMan246!",
  database: "bamazon"
});

// This function is not working Getting the below error:
//ER_NOT_SUPPORTED_AUTH_MODE: 
//Client does not support authentication protocol requested by server; 
//consider upgrading MySQL client

// ----------------------------------
// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   start();
// });
// -----------------------------------

// Pull list of products after connection is established 
AllProducts();

function AllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    console.table(res);

    whatcustomerwants(res);
  });
}
// Ask customer questions on what they want and how many units they want
function whatcustomerwants() {
  inquirer.prompt([{
    name: "item",
    type: "input",
    message: "What is the ID of the item you'd like?"
  },
  {
    name: "category",
    type: "catinput",
    message: "How many units of this item would you like?"
  }]).then(function () {
  })

};

