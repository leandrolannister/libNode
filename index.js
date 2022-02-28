const File = require('./File.js');

const path = process.argv;

let file = new File(path[2]);

file.readFile_2().then((texto) => {
    file.links(texto);
}).catch((error) => {
    console.log(`Error: ${error} on readFile`);
});

// file.redFile();
// file.readFile_1();  