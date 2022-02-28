const File = require('./File.js');

async function main(){
   const path = process.argv;
   let file = new File(path[2]);
   let links = await file.readFile_2();

   console.log('Links', links);
}

main();