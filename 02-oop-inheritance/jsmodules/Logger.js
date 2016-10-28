class logger {
 constructor(){

 }

 log(movieInstance, functionName){
     console.log(`${movieInstance.title} ${functionName}`)
 }
}
export {logger}
