   $(document).ready(function(){
            searchMovie();
            TypeMovie();
            $("#SearchBox").keyup(function(){  searchMovie();});
            $("#Select").change(function(){
                TypeMovie();
            });
            $("#SelectGen").change(function(){
                ClasiGenre();
            });
    });
function printMovies(mov,id) {

    var moviesCant = mov.length;
    var imagenes = '';
    var max = 0;
    for (i = 0; i < moviesCant; i++) {
        var url = "DescFilm.html?id=" + mov[i].id;
        imagenes += "<li ><a href="+ url +"><img href=#openDesc class=movi src="+ mov[i].poster +" /><a></li>";
        max = max + 1;
    }

    document.getElementById(id).innerHTML = imagenes;
}
function SetRat(){
	$.get("http://localhost:8000/api/movies?order=rating&limit=3", function(data){
        printMovies(data,"Popular");}); 
}
function SetPop(){
    $.get("http://localhost:8000/api/movies?order=released&limit=3", function(data){
        printMovies(data,"Premier");}); 
}
function searchMovie() {
$.get("http://localhost:8000/api/movies?search="+$('input#SearchBox').val(), function(data) {
 printMovies(data,"showFilm") 
});}
function TypeMovie() {
	var Val=document.getElementById('Select').value;
	if(Val=="All"){
		$.get("http://localhost:8000/api/movies", function(data) {
            printMovies(data,"showFilm")});}
    if(Val=="Popular"){
    $.get("http://localhost:8000/api/movies?order=rating&limit=4", function(data) {
            printMovies(data,"showFilm")});}
    if(Val=="Premieres"){
    	$.get("http://localhost:8000/api/movies?order=year&limit=4", function(data) {
            printMovies(data,"showFilm")});}
}
function ClasiGenre() {
$.get("http://localhost:8000/api/movies?genre="+$('Select#SelectGen').val(), function(data) {
 printMovies(data,"showFilm") 
});}


