function getArg (flag){
    var index = process.argv.indexOf(flag);
    return(index === -1) ? null : process.argv[index+1];
}
module.exports = getArg;