let social = {
    share: function(friendName){
        console.log(`${friendName} likes ${this.title}`);
    },
    like: function(friendName){
        console.log(`${friendName} share ${this.title}`);
    }
}

export default social;