
const onLoadHandler = () => {  /*This function removes the hidden atribute */
    let element = document.getElementById("hiddenOne");
    element.removeAttribute("hidden");

}

const showAlert = () => {
    alert("Think twice, code once!");
}

const getApiResponse = () => {
    let sectionOne = document.getElementById("sectionOne");
    fetch('http://api.icndb.com/jokes/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            sectionOne.innerHTML = data.value.joke; /*Replacing sectionOne text with the joke from api*/
        });

}

const toggleSection = () => {
    getApiResponse();
}


