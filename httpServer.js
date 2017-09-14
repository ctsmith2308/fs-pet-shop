'use strict'

let http = require('http')
let fs = require('fs')
// let path = require('path')

let server = http.createServer(function(req, res) {

  if (req.method === 'GET' && req.url === '/pets') {
      fs.readFile('pets.json', 'utf8', function(err, content) {
        if (err) console.error("this is the error " + err)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(content);
      })
    } else if (req.method === 'GET' && req.url === '/pets/0') {
      fs.readFile('pets.json', 'utf8', function(err, content) {
        if (err) console.error("this is the error " + err)
        let respBody = JSON.parse(content)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(respBody[0]));
      })
    } else if (req.method === 'GET' && req.url === '/pets/1') {
      fs.readFile('pets.json', 'utf8', function(err, content) {
        if (err) console.error("this is the error " + err)
        let respBody = JSON.parse(content)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(respBody[1]));
      })
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end("Not Found")
    }
}).listen(8000, function() {
  console.log("hey listen on 8000");
})

module.exports = server;
