function testfade() {
	var showhide = document.getElementById('showhide');
	showhide.className = showhide.className += " fade";
}

window.onload = testfade; 
function tellJoke(){
	var request = new XMLHttpRequest();
	request.open('GET', 'http://api.icndb.com/jokes/random', true);

	request.onload = function() {

		var data = JSON.parse(request.responseText);
		console.log(data.value.joke);
		document.getElementById("joke").innerHTML = data.value.joke;

	};

	request.onerror = function() {
		document.getElementById("showhide").style.color = "red";
	};

	request.send();
}



/* config object for AJAX calls */


/* promise */

function httpGet(config) {
	return new Promise(
		function (resolve, reject) {
			var request = new XMLHttpRequest();
			request.onreadystatechange = function () {
				if (this.status === 200) {
					var obj = JSON.parse(this.responseText);
					document.getElementById(config.id).innerHTML =
					obj.value.joke;
				} else {
                           // Something went wrong (404 etc.)
                           reject(new Error(this.statusText));
                       }
                   }
                   request.onerror = function () {
                   	reject(new Error(
                   		'XMLHttpRequest Error: '+this.statusText));
                   };
                   request.open("GET", config.url, true);
                   request.send();   
               });
}

function httpPromise(){
	var config = {url: 'http://api.icndb.com/jokes/random', id: 'joke'};
	httpGet(config)
	.then(
		function (value) {
			console.log('Fulfilled! Response: ' + value);
		},
		function (reason) {
			console.error('Unfulfilled, somehow', reason);
		});
}
/* git */

function getGit(){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.github.com/search/repositories?q=javascript', true);

	request.onload = function() {

		var data = JSON.parse(request.responseText);

		/* clearing the list */
		var myNode = document.getElementById("repolist");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
		/*printing the stuff */
		for (var i = 0, l = data.items.length; i < l; i++) {
			var obj = data.items[i];
			console.log(obj.full_name);

			var node = document.createElement("li");                 
			var textnode = document.createTextNode(obj.full_name);        
			node.appendChild(textnode);                              
			document.getElementById("repolist").appendChild(node);     

		};
	};

	request.send();
};

function searchGit(){
	var nameElement = document.getElementById("textsearch");
	var searchTerm = nameElement.value;

	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.github.com/search/repositories?q=' + searchTerm, true);

	request.onload = function() {


		var data = JSON.parse(request.responseText);

		/* clearing the list */
		var myNode = document.getElementById("repolist");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
		/*printing the stuff */
		for (var i = 0, l = data.items.length; i < l; i++) {
			var obj = data.items[i];
			console.log(obj.full_name);

			var node = document.createElement("li");                 
			var textnode = document.createTextNode(obj.full_name);        
			node.appendChild(textnode);                              
			document.getElementById("repolist").appendChild(node);     

		};
	};

	request.send();
};



/* tables and matrix */

var testArray = [["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]];

function createTable(tableData) {
	var table = document.createElement('table');
	table.className = "arraytable";
	var tableBody = document.createElement('tbody');

	tableData.forEach(function(rowData) {
		var row = document.createElement('tr');

		rowData.forEach(function(cellData) {
			var cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
		});

		tableBody.appendChild(row);
	});

	table.appendChild(tableBody);
	document.body.appendChild(table);
}

createTable(testArray);