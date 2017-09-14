// let express = require('express');
// let app = express();
// let port = process.env.port||8000;
//
// let server = require('./server');
//
// app.use(server);
//
// app.listen(port, function(){
//   console.log("Listening on:", port);
// })

let express = require('express');
let fs = require('fs');
let path = require('path')
let filePath = path.join('pets.json')
let router = express()
// let router = express.Router();

router.get('/pets', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      console.error(err)
    } else {
      let fileData = JSON.parse(content)
      console.log(fileData)
      res.setHeader('Content-Type', 'application/json')
      res.send(fileData)
    }
  })
})
router.get('/pets/:id', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, content){
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }
    var id = Number.parseInt(req.params.id);
    var pets = JSON.parse(content);
    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }
      res.set('Content-Type', 'application/json')
      res.send(pets[id])
  });
});

router.post('/pets', function (req, res){
  fs.readFile(filePath, 'uft8', function(err, content){
    if(err){
      console.error(err.stack)
      return res.sendStatus(500);
    }
    let pets = JSON.parse(content);
    let petName = req.body.name;
    let petAge = req.body.age;
    let petKind = req.body.kind;

    if()
  })
})


router.post('/guests', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);
    var guest = req.body.name;

    if (!guest) {
      return res.sendStatus(400);
    }

    guests.push(guest);

    var newGuestsJSON = JSON.stringify(guests);

    fs.writeFile(guestsPath, newGuestsJSON, function(writeErr) {
      if (writeErr) {
        console.error(writeErr.stack);
        return res.sendStatus(500);
      }

      res.set('Content-Type', 'text/plain');
      res.send(guest);
    });
  });
});


  module.exports = router;
