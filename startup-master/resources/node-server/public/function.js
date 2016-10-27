
function PrintMovies(arr,id)
{
	var len=arr.length;
	var a=[];
  for(var i =0;i<len;i++){
    var string ="<li><a href=#openDesc><img id="+i+" onclick=PrintInfo("+i+") class=movi src="+ arr[i].poster +" /></li><a>";
    a[i]=string;
  }
  document.getElementById(id).innerHTML=a; 
}
function SetRat(){
	$.get("http://localhost:8000/api/movies?order=rating&limit=3", function(data){
        PrintMovies(data,"Popular");}); 
}
function SetPop(){
    $.get("http://localhost:8000/api/movies?order=year&limit=3", function(data){
        PrintMovies(data,"Premier");}); 
}
function searchMovie() {
$.get("http://localhost:8000/api/movies?search="+$('input#SearchBox').val(), function(data) {
 PrintMovies(data,"showFilm") 
});}
function TypeMovie() {
	var Val=document.getElementById('Select').value;
	if(Val=="All"){
		$.get("http://localhost:8000/api/movies", function(data) {
            PrintMovies(data,"showFilm")});}
    if(Val=="Popular"){
    $.get("http://localhost:8000/api/movies?order=rating&limit=4", function(data) {
            PrintMovies(data,"showFilm")});}
    if(Val=="Premieres"){
    	$.get("http://localhost:8000/api/movies?order=year&limit=4", function(data) {
            PrintMovies(data,"showFilm")});}
}
function ClasiGenre() {
$.get("http://localhost:8000/api/movies?genre="+$('Select#SelectGen').val(), function(data) {
 PrintMovies(data,"showFilm") 
});}
function PrintInfo(ids)
{
    $.get("http://localhost:8000/api/movies?id=ids", function(data){
            document.getElementById('Filminfo').innerHTML="<div><h1 class=titles>"+data[ids].title+"</h1><br><img class=movi src="+ data[ids].poster +" /><br><p class=titles1> Rating : "+data[ids].rating+"</p><p class=titles1> Actors : "+data[ids].actors+"</p><p class=titles1> Director : "+data[ids].director+"</p><p class=titles1> Year : "+data[ids].year+"</p><div id=descri> Plot : "+data[ids].plot+"</div></div>";
    });
}

function AddMovie() {
    var movie = {
        "title": $("#TitleModal").val(),
        "year": 0,
        "released":$("#RelasedModal").val(),
        "genre": $("#CategoryModal").val(),
        "director": $("#DirectorModal").val(),
        "actors": $("#ActorsModal").val(),
        "plot": $("#PlotModal").val(),
        "poster": $("#PosterModal").val(),
        "rating": $("#PointModal").val(),
    };
    var m = JSON.stringify(movie);
    $.ajax({
        url: '/api/movies',
        type: 'POST',
        dataType: 'json',
        data: m
    });

    return false;
}
