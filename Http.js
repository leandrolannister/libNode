class Http {

   constructor() {
      this._fetch = require('node-fetch');
   }

   async lookUpLinks(data) {
      let links = this.getUrl(data);
      let status = await this.lookUpStatus(links);

      console.log(status);
   }

   getUrl(links) {
      return links.map(links => Object.values(links).join());
   }

   async lookUpStatus(links) {
      try {
         const statusArr = Promise.all(
            links.map(async url => {
               const res = await this._fetch(url);
               return res.status;
            })
         );
         return statusArr;
      } catch (error) {
         this.handleError(error);
      }
   }

   handleError(error) {
      throw new Error(`Error:${error}`);
   }
}

module.exports = Http;