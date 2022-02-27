const File = require('./File.js');

let file = new File('./src/files/texto.md');

// file.redFile();
// file.readFile_1();

file.readFile_2().then((texto) => {
    file.links(texto);
}).catch((error) => {
    console.log(`Error: ${error} on readFile`);
});

  