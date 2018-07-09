  function getJokePromise(){
      let config = {

  		      method: "GET",
  		      url:"http://api.icndb.com/jokes/random",
            async:true,
  	};
      callAjax(config).then(promiseFulfilled,promiseFailed);
      }



    function callAjax(config){
    	  let promise = new Promise (function (resolve, reject){
    		let request;
    		if (window.XMLHttpRequest) {
        	request = new XMLHttpRequest();
     		}
        	request.open(config.method,config.url,config.async);
        	request.send();
          request.onreadystatechange = function(){
        	if (request.readyState == 4) {
        		if (request.status == 200) {
        			let response = JSON.parse(request.responseText);
        			resolve(response);
        		} else {
        			reject(request.status);
        		}
        	} else {
        		console.log("processing request");
        	}
        }
    	});
    	return promise;
    }

    function promiseFulfilled(config){
        let joke = document.getElementById("joke");
        joke.innerHTML  =  config.value.joke;

    }


    function promiseFailed(){
          let joke = document.getElementById("joke");
          joke.style.background = "red";
          console.log("error");

    }
