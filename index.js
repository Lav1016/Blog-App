const express = require("express")
const app = express();
const http = require("http");
const Db = require('./config/database')
const server = http.createServer(app);
require("dotenv").config()



const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
// server listening 
server.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});


module.exports = app;
