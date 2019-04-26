
const onLoadHandler = () => {  /*This function removes the hidden atribute */
    let element = document.getElementById("hiddenOne");
    element.removeAttribute("hidden");

}

const showAlert = () => {
    alert("Think twice, code once!");
}

const getApiResponse = (url) => {
    let sectionOne = document.getElementById("sectionOne");
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            sectionOne.innerHTML = data.value.joke; /*Replacing sectionOne text with the joke from api*/
        });

}




/* ****************************Data fetch points 5 y 6 Incomplete******************************************/

const createCORSRequest = (method, url) => {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.
const getTitle = (text) => {
    return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
const makeCorsRequest = () => {
    // This is a sample server that supports CORS.
    let url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html'; //to test the response

    let xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = () => {
        let text = xhr.responseText;
        let title = getTitle(text);
        document.getElementById("ajax_response").innerHTML = title;
    };

    xhr.onerror = () => {
        document.getElementById("ajax_response").style.color = "red"; //IF an error appears section must turn red
    };

    xhr.send();
}

//Promises  

let doThat = true;

let promise = new Promise((resolve, reject) => {
    if (doThat) {
        resolve("Resolving this!"); //Method invocation with string ass parameter
    } else reject("rejecting this!")
});

promise.then((message) => { //resolve body / method running
    console.log(message);

}).catch((message) => {  //Reject body
    console.log(message);
});


//******************Point 7 DOM Manipulation */

const matrixGenerator = () => {
    let matrix = new Array(3);
    matrix[0] = new Array(3);
    matrix[0][0] = "Nombre";
    matrix[0][1] = "Apellido";
    matrix[0][2] = "Documento";
    matrix[1] = new Array(3);
    matrix[1][0] = "Pablo";
    matrix[1][1] = "Ratti";
    matrix[1][2] = "35043330";
    matrix[2] = new Array(3);
    matrix[2][0] = "Susana";
    matrix[2][1] = "Fernandez";
    matrix[2][2] = "35043323";
    return matrix;
}


const createTable = () => { //I made this method only for 3 cases because i dont have where pull info so i made the matrixGenerator() 
    let matrix = matrixGenerator(); //Here the input matrix to extract de info
   //First i grab body and create de table and his body
    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    let tableBody = document.createElement("tableBody");
    //Here the loop to iterate throw the Matrix
    for (let x = 0; x < 3; x++) {
        let fila = document.createElement("tr"); //Row
        for (let i = 0; i < 3; i++) {
            let celda = document.createElement("td"); 
            let textoCelda = document.createTextNode(matrix[x][i]); 
            celda.appendChild(textoCelda); //inserto texto en celda
            fila.appendChild(celda);
        }
        tableBody.appendChild(fila);
    }
    table.appendChild(tableBody);
    // appends <table> into <body>
    body.appendChild(table);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    table.setAttribute("border", "3");
    
  
}



