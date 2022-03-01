class Http {
   
   lookUpLinks(links){
      console.log(this.getUrl(links));
   } 
   
   getUrl(links){
      return links.map(links => Object.values(links).join());   
   }
}

module.exports = Http;