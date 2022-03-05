class File {
    
    constructor(path) {
        this._fs = require('fs');
        this._path = path;
        this._enconding = "utf-8";
        this._chalk = require('chalk');        
    }

    redFile() {
        this._fs.readFile(this._path, this._enconding, (error, fileText) => {
            if (error)
               this.getError(error);
            console.log(this._chalk.green(fileText));
        });
    }

    getError(error){
       throw new Error(this._chalk.red(error.code, 'File not found'));
    }
    
    readFile_1(){
        this._fs.promises.readFile(this._path,this._enconding)
        .then((text) => console.log(this._chalk.bgGrey(text))) 
        .catch((error) => this.getError(error));
    }

    async readFile_2(){
        try {
           let text = await this._fs.promises.readFile(this._path,this._enconding);
           return this.links(text);        
        }catch(error){
            this.getError(error);
        }   
    }    

    links(texto) {
       const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
       const links = [];
       let temp;
       
       while( (temp = regex.exec(texto) ) !== null) {
          links.push({ 
              [temp[1]]: temp[2] //Grupos do Regexp
         });
       }      
      return links.length === 0 ? "links was found" : links;
    }    
}

module.exports = File;