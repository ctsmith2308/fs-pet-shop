  let express = require('express');
  let app = express();
  let port = process.env.port||8000;
  let bodyParser = require('body-parser');

  let server = require('./restfulExpressServer');

  app.use(server)
  
  app.listen(port, function(){
    console.log("Listening on:", port);
  })

  module.export = app
