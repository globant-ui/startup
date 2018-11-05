// Funcion para crear la tabla
function create_table() {
    // Take the reference of the element body.
    var body = document.getElementsByTagName("body")[0];
    // Create the elements <table> and <tbody>.
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    // Variables
    var row;
    var cells;
    var textCells;
    var counter;
    var counter_2;

    // Create cells titles
    row = document.createElement("tr");
    for (counter_2 = 0; counter_2 < 3; counter_2++) {
        cells = document.createElement("th");
        if (counter_2 === 0) {
            textCells = document.createTextNode("Name");
        }
        if (counter_2 === 1) {
            textCells = document.createTextNode("LastName");
        }
        if (counter_2 === 2) {
            textCells = document.createTextNode("Age");
        }
        cells.appendChild(textCells);
        row.appendChild(cells);
    }
    tbody.appendChild(row);

    // Create cells content
    for (counter = 0; counter < getRandomArbitrary(100); counter++) {
        row = document.createElement("tr");

        for (counter_2 = 0; counter_2 < 3; counter_2++) {
            cells = document.createElement("td");
            if (counter_2 === 0) {
                textCells = document.createTextNode(names[getRandomArbitrary(names.length - 1)]);
            }
            if (counter_2 === 1) {
                textCells = document.createTextNode(lastname[getRandomArbitrary(lastname.length - 1)]);
            }
            if (counter_2 === 2) {
                textCells = document.createTextNode(getRandomArbitrary(100));
            }

            cells.appendChild(textCells);
            row.appendChild(cells);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    body.appendChild(table);
}


// Function to create a random number.
function getRandomArbitrary(max) {
    return Math.round(Math.random() * max);
}
// Array list of names.
var names = ['Abie', 'Aaron',
    'Adele', 'Abadie',
    'AdelineE', 'Abel',
    'Adriana', 'Abigail',
    'Aeryn', 'Abraham',
    'Agnes', 'Achille',
    'Ailann', 'Adam',
    'Alanis', 'Adolf',
    'Alberta', 'Adrian',
    'Alberte', 'Adrien',
    'Alessia', 'Aki'
];
// Array list of lastnames.
var lastname = ['Roberts',
    'Thomas', 'Evans',
    'Wilson', 'Davies',
    'Taylor', 'Brown',
    'Williams', 'Jones',
    'Smith', 'Smith',
    'Johnson', 'Williams',
    'Brown', 'Jones',
    'Miller', 'Garcia'
];