var express = require('express')
var fs = require('fs')
var app = express();

// app.disable('x-powered-by');
app.get("/pets", function(req, res){
  fs.readFile('pets.json', 'utf8', function(err, content){
    if (err) console.error(err)
      // return res.sendStatus(500)
    let final = JSON.parse(content)
    res.send(final);
  })
})
app.get("/pets/0", function(req, res){
  fs.readFile('pets.json', 'utf8', function(err, content){
    if (err) console.error(err)
      // return res.sendStatus(500)
    let final = JSON.parse(content)
    res.send(final[0]);
  })
})
app.get("/pets/1", function(req, res){
  fs.readFile('pets.json', 'utf8', function(err, content){
    if (err) console.error(err)
      // return res.sendStatus(500)
    let final = JSON.parse(content)
    res.send(final[1]);
  })
})
app.get('/pets/:id', function(req, res) {
  fs.readFile('pets.json', 'utf8', function(err, content){
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var pets = JSON.parse(content);

    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.set('Content-Type', 'text/plain');
    res.send(pets[id]);
  });
});

app.listen(8000, function(){
  console.log("Listening on port 8000")
})


// var fs = require('fs');
// var path = require('path');
// // var guestsPath = path.join(__dirname, 'guests.json');
//
// var express = require('express');
// var app = express();
// // var port = process.env.PORT || 8000;
//
// app.disable('x-powered-by');
//
// app.get('/guests', function(req, res) {
//   fs.readFile(guestsPath, 'utf8', function(err, content) {
//     if (err) {
//       console.error(err.stack);
//       return res.sendStatus(500);
//     }
//
//     var guests = JSON.parse(guestsJSON);
//
//     res.send(guests);
//   });
// });
//
// app.use(function(req, res) {
//   res.sendStatus(404);
// });


module.exports = app;
