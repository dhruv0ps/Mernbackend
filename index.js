const express = require('express');
const cors = require('cors');
const router = require('./route/router.js');
const server = express();
const DBConnection = require('./database/db.js')
const PORT = process.env.PORT || 8080
server.use(cors());
server.use('/',router)

DBConnection();

server.listen(PORT,()=>{
  console.log('server started')
})
