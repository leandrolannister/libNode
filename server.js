const fs = require('fs');

fs.promises.readFile('./src/files/text.md', "utf-8")
.then(text => console.log(text))
.catch(error => console.log(error))

