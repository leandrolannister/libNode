class Index {
    constructor() {
        this._chalk = require('chalk');
        this._fs = require('fs');
    }

    redFile(path) {
        const enconding = "utf-8";
        //_ dentro da função ignora o valor do primeiro parâmetro
        this._fs.readFile(path, enconding, (_, text) => {
            console.log(this._chalk.green(text));
        });
    }
}

let index = new Index();
index.redFile('./files/text.md');

