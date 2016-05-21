let social = {
  share: function(friendName){
    console.log(`${friendName} shares ${this.title}`);
  },
  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`);
  }
}

export default social;
