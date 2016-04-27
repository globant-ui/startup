window.onload = function (){
    var text = document.getElementById("paragraph");
    
    if (text.style.display == "block"){
        text.style.display = "none";
        
    } else {
        var timer = setTimeout(function(){
        text.style.display = "block";
        text.className = "fadein";
        },1000);
    }
}

var jokeT = document.getElementById("jokeText");
console.log(jokeT);
var jokeButton = document.getElementById("jokeButton");
jokeButton.addEventListener('click', function backgroundReadFile(url) {
    var req = new XMLHttpRequest();
    req.open(config.method, config.url, config.asyncValue);
    req.addEventListener("load", function () {
        if (req.status < 400) {
            var j = JSON.stringify(req.responseText);
            jokeT.innerHTML = JSON.parse(req.responseText).value.joke   ;
        } else {
            jokeT.innerHTML = ("Request failed: " +
                               req.statusText);
            jokeT.className = "error";
        }
    });
    req.addEventListener("error", function () {
        jokeT.innerHTML = "Network error";
        jokeT.className = "error";
    });
    req.send(null);
});

var config = {
    method: "GET",
    url: "http://api.icndb.com/jokes/random",
    asyncValue: true   
}

function showInfo() {

    var promise = new Promise(function (resolve, reject) {

        var configR = {
            url: 'https://api.github.com/search/repositories',
            method: 'GET',
            data: '?q='
        }


        var req = new XMLHttpRequest();

        req.onreadystatechange = function () {

            if (req.readyState == 4 && req.status == 200) {
                var arrayRepos = [];
                arrayRepos = JSON.parse(req.responseText).items;

                if (arrayRepos !== undefined) {
                    resolve(arrayRepos);
                } else {
                    reject('Something is wrong!');
                }
            }
        }

        var search = document.getElementById('txtSearch').value;

        var url = configR.url + configR.data + search;

        req.open(configR.method, url, true);
        req.send();
    });

    promise.then(function (arrayRepos) {

        var result = document.getElementById('listOfRepos');

        arrayRepos.forEach(
            function (repo) {
                var li = document.createElement("li");
                var text = document.createTextNode(repo.full_name);
                li.appendChild(text);
                result.appendChild(li);
            });
    }, function (err) {
        console.log(err);
    });
}

function showTable() {

     var matrix = [
             ['Jazz', 'Rock', 'Hip Hop'],
             ['Classical', 'Reggae', 'Country'],
             ['R&B', 'Latin', 'Dance']
     ];

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var tbody = document.createElement('tbody');
    var matrixTable = document.getElementById('matrixTable');

     matrix[0].forEach(function (e) {
         var th = document.createElement('th');
         var node = document.createTextNode(e);
         th.appendChild(node);
         tr.appendChild(th);
     }, tr);

    thead.appendChild(tr);
    table.appendChild(thead);

    var tr = document.createElement('tr');
    matrix[1].forEach(function (e) {
        var td = document.createElement('td');
        var node = document.createTextNode(e);
        td.appendChild(node);
        tr.appendChild(td);
    }, tr);

    tbody.appendChild(tr);

    var tr = document.createElement('tr');
    matrix[2].forEach(function (e) {
        var td = document.createElement('td');
        var node = document.createTextNode(e);
        td.appendChild(node);
        tr.appendChild(td);
    }, tr);

    tbody.appendChild(tr);
    table.appendChild(tbody);
    
    matrixTable.appendChild(table);
 }