function Movie(title, year, duration) {
	this.title = title;
	this.year = year;
	this.duration = duration;
}

var jleague = new Movie("Justice League", 2017, 120);
var thepruge = new Movie("The Purge", 2013, 84);
var avengers = new Movie("The Avengers", 2012, 142);
var hpotter = new Movie("Harry Potter and the Prisoner of Azkaban", 2004, 141);

//KEY POINT 6
var Social = {
	share(friendName) {
		console.log("Share " + this.title + " with " + friendName);
	},
	like(friendName) {
		console.log(friendName + " likes " + this.title);
	}
}

var jleague = Object.assign(Social, jleague);
jleague.share("Leonel Signore");

var avengers = Object.assign(Social, avengers);
avengers.like("Leonel Signore");

//KEY POINT 8
class Actor {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

var dRadcliffe = new Actor("Daniel Radcliffe", 28);
var tFelton = new Actor("Tom Felton", 30);
var otherCast = [
	new Actor("Emma Watson", 27),
	new Actor("Rupert Grint", 29)
];

hpotter.cast = new Array();

var hpotter = Object.assign(hpotter, {
	addCast(actors) {
		if(actors[0] == undefined) { //SI NO ES UN VECTOR
			hpotter.cast[hpotter.cast.length] = actors;
			alert("no es vector");
		}
		else {
			for(let i = 0; i < actors.length; i++) {
				hpotter.cast[hpotter.cast.length] = actors[i];
			}
			alert("es vector");
		}
	}
});

hpotter.addCast(dRadcliffe);
hpotter.addCast(tFelton);
hpotter.addCast(otherCast);