let social = {
    share: function(fn){
        console.log("Share "+this._title+" with "+fn);
    }, 
    like: function(fn){
        console.log(fn+" like "+this._title);
    },
};