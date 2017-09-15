// let express = require('express');
// let fs = require('fs');
// let app = express()
// let path = require('path')
// let filePath = path.join('pets.json')
// // let router = express.Router();
//
// app.get('/pets', function(req, res) {
//   fs.readFile('filePath', function(err, content) {
//     if(err){console.error(err)}
//       else{let fileData = JSON.parse(content)
//       res.send(fileData)}
//     })
//   })

  let express = require('express');
  let app = express();
  let port = process.env.port||8000;
  let bodyParser = require('body-parser');

  let server = require('./restfulExpressServer');



  // let server = require('./server');

  // app.use(server);
  // app.use(req)

  app.listen(port, function(){
    console.log("Listening on:", port);
  })
