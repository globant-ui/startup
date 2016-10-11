//EXERCISE 6
  function eventRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
    xhttp.onreadystatechange = function(event) {
      var response = JSON.parse(event.target.response);
      document.getElementById('sectionHidden').innerHTML = response.value.joke;
       if (xhttp.readyState === XMLHttpRequest.DONE) {
         if (xhttp.responseText.value) {
             document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
         }
       }
   }
   xhttp.send();
}
//EXERCISE 7
function eventOnClick(){
  var config = {
    url: 'http://api.icndb.com/jokes/random'
};
  function resolve(xhttp) {
    console.log(xhttp.responseText);
    var response = JSON.parse(event.target.response);
    document.getElementById('sectionHidden').innerHTML = response.value.joke;
};
  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
};
  eventRequestReusable(config).then(resolve,reject);
};
//EXERCISE 9
function secondEventOnClick(){
  var config = {
    url: 'https://api.github.com/search/repositories'
};
  function resolve(xhttp) {
    console.log(xhttp.responseText);
    var response = JSON.parse(event.target.response);
    document.getElementById('sectionHidden').innerHTML = response.errors[0].field;
};
  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
};
  eventRequestReusable(config).then(resolve,reject);

};
//EXERCISE 7 AND 9
function eventRequestReusable(object, resolve, reject) {
  return new Promise( function (resolve, reject) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', object.url , true);
  xhttp.send();
  xhttp.onload = function () {
    if (this.status == 200 || this.status == 422) {
      resolve(xhttp);
    } else {
      reject();
    }
  };
  xhttp.onerror = function () {
    document.getElementById("sectionHidden").style.backgroundColor = "red";;
    reject();
  };
})
};

// if (xhttp.readyState === XMLHttpRequest.DONE)
//   {
//     if (xhttp.responseText.value)
//       {
//         document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
//       }
//   }
