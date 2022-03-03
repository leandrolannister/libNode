class Http {

   constructor() {
      this._fetch = require('node-fetch');
   }

   async lookUpLinks(links) {
      try {
         let url = this.getUrl(links);

         if (url <= 0)
            throw new Error("Error on getURL");

         let status = await this.lookUpStatus(url);

         if (status <= 0)
            throw new Error("Error on lookUpStatus");

         this.join(links, status);
      } catch (error) {
         this.handleError(error);
      }
   }

   join(links, status) {
      const result = links.map((object,index) => {
         return ({
            ...object,
            status:status[index]
         })
      });
      console.log('Join', result);
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