
const onLoadHandler = () => {  /*This function removes the hidden atribute */
    let element = document.getElementById("hiddenOne");
    element.removeAttribute("hidden");

}

const showAlert = () => {
    alert("Think twice, code once!");
}


//Getting response from Random Jokes API
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

//********************   Geting repos from API with parameters  *****************************/
const getRepos = (url) => {
    document.getElementById("reposTable").removeAttribute("hidden");

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < 10; i++) {
                var li = document.createElement('li');
                li.id = "newLi";
                li.innerHTML = data.items[i].description;
                document.getElementById("reposList").appendChild(li);

            }
            repos = data.items;
        })
}

let repos; //Here the array of repos from getRepos() to manipulate the data after

const getDescriptions = () => { //Return an array of descriptions to filter 
    let filteredRepos = [];
    for (let i = 0; i < 10; i++) {
        filteredRepos[i] = repos[i].description;
    }
    return filteredRepos;
}

const filterItems = (toFilter) => {   //Return an array filtered
    let reposFiltrados = getDescriptions();
    return reposFiltrados.filter((el) => {
        return el.toLowerCase().indexOf(toFilter.toLowerCase()) > -1;
    })

}

const filterRepo = (toFilter) => { //
    let filteredItems = filterItems(toFilter);
    document.getElementById("reposList").innerHTML = "";

    for (let i = 0; i < filteredItems.length; i++) {
        console.log("repeticiones : " + i);
        let li = document.createElement('li');
        li.id = "newLi";
        li.innerHTML = filteredItems[i];
        document.getElementById("reposList").appendChild(li);
    }

}



/************************************************************** Reutilizable AJAX Call  ************************/



let config = {
    method: "GET",
    url: "http://api.icndb.com/jokes/random",
    async: true
}



const AJAXcall = (config) => {
    const req = new XMLHttpRequest();
    req.open(config.method, config.url, config.async);

    let myPromise = new Promise((resolve, reject) => {
        req.onreadystatechange = () => {
            if (req.readyState == 4 && req.status == 200) {
                document.getElementById("ajax_response").style.color = "green"; //Change color to green if success              
                document.getElementById("ajax_response").innerHTML = "AJAX call working fine";
                resolve(req.responseText); //the responseText must be an object but its a String
            }
            else {
                if (req.status == 500 || req.status == 401 || req.status == 403) { //chekear otros datos! porq no logro q tire error!
                    document.getElementById("ajax_response").style.color = "red"; //Change section to red                  
                    document.getElementById("ajax_response").innerHTML = "AJAX call not working";
                    reject("ERROR !!!");
                }

            }
        }

    });
    req.send(config.url);
    return myPromise;
}

// let promesa = AJAXcall(config);
// promesa.then((val) =>{
//     console.log(val+"Promise resolved!!");
// }).catch((val)=>{
//     console.log(val +"Promise Rejected!!");
// });

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
    let matrix = matrixGenerator(); //Here the matrix to extract de info
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









////////////////////////////////////
