const File = require('./File.js');
const Http = require('./Http.js');
const path = process.argv; //Obtém informações do terminal

async function main() {
   let http = new Http();
   let file = new File(path[2]);
   let links = await file.readFile_2();

   if (path[3] == 'validar') {
      http.lookUpLinks(links);
   } else {
      console.log('Links', links);
   }
}

main().then(success => success)
.catch(error => error);