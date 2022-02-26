const fs = require('fs');
const { resolve } = require('path');

async function read(){ 
   try {     
      let text = await fs.promises.readFile('./src/files/texto.md', 'utf-8'); 
      return text;
   }catch(error){
       throw new Error(error.code,"Error on read");
   }      
}

read().then((texto) => {
   let regExp = /\[[^\]]*\]/ig;
   let result = texto.match(regExp);

   console.log('Result', result);
});




