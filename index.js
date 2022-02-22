class Index {
    constructor(path) {
        this._fs = require('fs');
        this._path = path;
        this._enconding = "utf-8";
        this._chalk = require('chalk');        
    }
    redFile() {
        //_ dentro da função ignora o valor do primeiro parâmetro
        this._fs.readFile(this._path, this._enconding, (_, fileText) => {
            console.log(this._chalk.green(fileText));
        });
    }
}

let index = new Index('./app/files/text.md');
index.redFile();

