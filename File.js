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
           console.log(this.links(text));
           
        }catch(error){
            this.getError(error);
        }   
    }    

    links(texto) {
       const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
       const results = [];
       let temp;
       
       while((temp = regex.exec(texto)) !== null) {
          results.push({ [temp[1]]: temp[2] })
       }      
       return results;
    }    
}

module.exports = File;