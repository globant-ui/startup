window.onload = FadeText;
       function FadeText(){
                document.getElementById('hideText').className = 'op1';
            }
     
       
       function makeMatrix(){
           
           httpGet({url: 'https://api.github.com/search/repositories?q=javascript'})
                .then(
                   function(value){
                      var obj = JSON.parse(value);
                   // Obtener la referencia del elemento body
                  var body = document.getElementsByTagName("body")[0];
                 
                  // Crea un elemento <table> y un elemento <tbody>
                  var tabla   = document.createElement("table");
                  var tblBody = document.createElement("tbody");
                 
                  // Crea las celdas
                  for (var i = 0; i < obj.items.length; i++) {
                    // Crea las hileras de la tabla
                    var hilera = document.createElement("tr");
                    var item = obj.items[i];
                    
                    for (var j = 0; j < 2; j++) {
                      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                      // texto sea el contenido de <td>, ubica el elemento <td> al final
                      // de la hilera de la tabla
                        
                      var celda = document.createElement("td");
                      
                      if(j==0){
                          var textoCelda = document.createTextNode(item.id);
                      }
                      if(j==1){
                          var textoCelda = document.createTextNode(item.full_name);
                      }
                      celda.appendChild(textoCelda);
                      hilera.appendChild(celda);
                    }
                    
                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                    tblBody.appendChild(hilera);
                  }
                 
                  // posiciona el <tbody> debajo del elemento <table>
                  tabla.appendChild(tblBody);
                  // appends <table> into <body>
                  body.appendChild(tabla);
                  // modifica el atributo "border" de la tabla y lo fija a "2";
                  tabla.setAttribute("border", "2");
                  
                  
                  
                  document.getElementById("matrixButton").disabled = true; 
                      
                   },
                function(reason){
                    
                });
  
                    
                   
       }
       
       
       function renderJokes(){
            httpGet({url: 'http://api.icndb.com/jokes/random'})
               .then (
                   function (value) {          
                       var obj = JSON.parse(value);
                       document.getElementById('jokeContent').innerHTML =
                       obj.value.joke;
               },
               function (reason) {
                   var elem = document.getElementById('jokeContent');
                   elem.innerHTML = "error 404 service not available";
                   elem.style.background = '#ff0000';
                   elem.style.color = '#ffffff';
               });
       };
       
       
       function getRepoNames(){
           var qParameter = document.getElementById('repoParameter');
           httpGet({url: 'https://api.github.com/search/repositories' + '?q=' + qParameter.value})
                 .then(
                    function(value){
                       var obj = JSON.parse(value);
                           for (var i = 0; i < obj.items.length; i++) {
                               var item = obj.items[i];
                               var ul = document.getElementById('repoNamesList');
                               var li = document.createElement("li");
                               li.appendChild(document.createTextNode(item.full_name));
                               ul.appendChild(li);     
                           }
                    },
                    function(reason){
                        
                    });
       };
    
       
       function httpGet(config) {
           return new Promise(
               function (resolve, reject) {
                   var request = new XMLHttpRequest();
                   request.onreadystatechange = function () {
                       if (this.readyState == 4 && this.status == 200) {
                           resolve(this.response);        
                       } else {
                           // Something went wrong (404 etc.)
                           if(this.readyState == 4){   // it means its ready and his status is not 200(OK)
                               reject(new Error(this.statusText));
                           }
                       }
                   }
                   request.onerror = function () {
                       reject(new Error(
                           'XMLHttpRequest Error: '+this.statusText));
                   };
                   request.open("GET", config.url, true);
                   request.send();   
               });
       };
       