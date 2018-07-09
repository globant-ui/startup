  function fadeIn() {
      var elementFade = document.getElementById("hidden");
      var opac = 0.1;
      elementFade.style.visibility=("visible");
      var timer = setInterval(function () {
          if (opac >= 1){
              clearInterval(timer);
          }
          elementFade.style.opacity = opac;
          opac += opac * 0.05;
      }, 15);
  }

  function getRandomJoke(){

      let url= "http://api.icndb.com/jokes/random";
      let request = new XMLHttpRequest();
      request.addEventListener("load", getJoke, true);
      request.open("GET", url, true);
      request.send(null);

  }

  function getJoke(e){

      let joke = document.getElementById("jokeHere");
      joke.innerHTML = e.target.response;

  }

  function getJokePromise(){
      let config = {

  		      method: "GET",
  		      url:"http://api.icndb.com/jokes/random",
  		      async:true,
  	};
      callJoke(config).then(promiseFulfilled,promiseFailed);
      }


      function callJoke(config){
        let promise = new Promise (function (resolve, reject){
          let request;
          if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
          }
          if(config.method == "GET"){
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
              console.log("Still processing the request");
            }
          }
        })
        return promiseObj;
      }





    function promiseFulfilled(config){
        let joke = document.getElementById("joke");
        joke.innerHTML  =  config.value.joke;

    }


    function promiseFailed(){
          let joke = document.getElementById("joke");
          console.log("error");
    }
