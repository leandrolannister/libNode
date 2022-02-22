class Index {
    constructor(path) {
        this._fs = require('fs');
        this._path = path;
        this._enconding = "utf-8";
        this._chalk = require('chalk');        
    }
    redFile() {
        this._fs.readFile(this._path, this._enconding, (error, fileText) => {
            if (error)
              throw new Error(this._chalk.red(error.code, 'File not found'));
            console.log(this._chalk.green(fileText));
        });
    }
}

let index = new Index('./app/files/tex.md');
index.redFile();

