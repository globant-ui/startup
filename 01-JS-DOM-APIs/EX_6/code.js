//EXERCISE 6
function loadTable(){
    var matrix = [
        ['Boca', 'River', 'Independiente'],
        ['Barcelona', 'Real Madrid', 'Atelico de Madrid'],
        ['Milan', 'Inter', 'Juventus']
    ];

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var tbody = document.createElement('tbody');
    var div = document.getElementById('divTable');

    matrix[0].forEach(function (element) {
        var th = document.createElement('th');
        var node = document.createTextNode(element);
        th.appendChild(node);
        tr.appendChild(th); // I HAD A TIPING ERROR HERE IN THE PREVIOUS COMMIT
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    //create a new element tr
    var tr = document.createElement('tr');
    matrix[1].forEach(function (element){
        var td = document.createElement('td');
        var node = document.createTextNode(element);
        td.appendChild(node);
        tr.appendChild(td);
    });
    tbody.appendChild(tr);

    //create a new element tr
    var tr = document.createElement('tr');
    matrix[2].forEach(function (element){
        var td = document.createElement('td');
        var node = document.createTextNode(element);
        td.appendChild(node);
        tr.appendChild(td);
    });
    tbody.appendChild(tr);

    table.appendChild(tbody);

    div.appendChild(table);
}