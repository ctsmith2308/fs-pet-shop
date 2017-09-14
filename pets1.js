let fs = require('fs')

let subcommand = process.argv[2];

if (subcommand === undefined) {
  console.error('Usage: node pets.js [read | create | update | destroy]')
  process.exit(1)
} else if (subcommand === "read") {
  fs.readFile("pets.json", "utf8", function(err, data) {
    if (err) {
      console.error(err)
      process.exit(1)
    } else {
      let index = process.argv[3];
      let content = JSON.parse(data);
      if (index === undefined) {
        console.log(content);
        process.exit(0)
      } else if (content[index] !== undefined) {
        console.log(content[index]);
        process.exit(0)
      } else {
        console.log("Usage: node pets.js " + subcommand + index)
        process.exit(1)
      }
    }
  })
} else if (subcommand === "create") {
  fs.readFile("pets.json", "utf8", function(err, data) {
    if (err) {
      console.error(err)
      process.exit(1);
    } else if (process.argv.length < 6) {
      console.error('Usage: node pets.js create AGE KIND NAME')
      process.exit(1)
    } else {
      let content = JSON.parse(data);
      let inputAge = Number(process.argv[3]);
      let inputKind = process.argv[4];
      let inputName = process.argv[5];
      let newAnimal = {}
      newAnimal.age = inputAge;
      newAnimal.kind = inputKind;
      newAnimal.name = inputName;
      content.push(newAnimal);
      let newString = JSON.stringify(content)
      fs.writeFile('pets.json', newString, 'utf8', function(writeError) {
        if (writeError) console.error(writeError)
        console.log(newAnimal);
        process.exit(0);
      })
    }
  })
}
