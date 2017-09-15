let express = require('express');
let fs = require('fs');
let path = require('path')
let filePath = path.join('pets.json')
let router = express()
let bodyParser = require('body-parser');
let morgan = require('morgan');


router.use(bodyParser.json())

router.get('/pets', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      console.error(err)
    } else {
      let fileData = JSON.parse(content)
      console.log(fileData)
      res.set('Content-Type', 'application/json')
      res.send(fileData)
    }
  })
})

router.get('/pets/:id', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }
    var id = Number.parseInt(req.params.id);
    var pets = JSON.parse(content);
    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      console.log("error in get");
      return res.sendStatus(404);
    }
    res.set('Content-Type', 'application/json')
    res.send(pets[id])
  });
});

router.post('/pets', function(req, res) {
  fs.readFile(filePath, 'uft8', function(err, content) {
    if (err) {
      console.error(err.stack)
      return res.sendStatus(500);
    }

    let pets = JSON.parse(content);
    console.log(pets)
    let body = req.body
    let petName = req.body.name;
    let petKind = req.body.kind;
    let petAge = req.body.age;

    if (!petName || !petKind || !petAge) {
      return res.sendStatus(400);
    }
    pets.push(body)
    let newPetJSON = JSON.stringify(pets)
    fs.writeFile(filePath, newPetJSON, function(err) {
      if (err) {
        console.error(err.stack);
        return res.sendStatuscode(500)
      }
      res.set("Content-Type", "application/json")
      res.send(body)

    })
  })
})

router.patch('/pets/:id', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      console.err(err);
      return res.send(500)
    }
    var id = Number.parseInt(req.params.id);
    let pets = JSON.parse(content);

    let petName = req.body.name;
    let petKind = req.body.kind;
    let petAge = req.body.age;
    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      console.log('hey im an error in patch')
      res.sendStatus(404);
    }
    let pet = pets[id]
    console.log(pet)
    if(petName){
      pet.name = petName
    }
    if(petKind){
      pet.kind = petKind
    }
    if(petAge){
      pet.age = petAge
    }

    let newPetJSON = JSON.stringify(pets)
    fs.writeFile(filePath, newPetJSON, function(err) {
      if (err) {
        console.error(err.stack);
        return res.sendStatuscode(500)
      }
      res.set("Content-Type", "application/json")
      res.send(pet)
    })
  })
})


module.exports = router;
