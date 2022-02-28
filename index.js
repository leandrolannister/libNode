const File = require('./File.js');
const Http = require('./Http.js');
const path = process.argv; //Obtém informações do terminal

async function main() {
   let file = new File(path[2]);
   let links = await file.readFile_2();

   if (path[3] == 'validar') {
      Http.lookUpLinks(links);
   } else {
      console.log('Links', links);
   }
}

main();