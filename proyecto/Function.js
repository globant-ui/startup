function showAllMovie()
{for (var i = 0; i <= objetojson.Peliculas.length; i++) {
           var poster =objetojson.Peliculas[i].poster;
        document.write("<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>");}
    }
function showPopularMovie()
 {
 		document.write("<li><a href=films/"+1+".html><img class=movi  src="+ objetojson.Peliculas[1].poster +" /></li><a>");
 		document.write("<li><a href=films/"+2+".html><img class=movi  src="+ objetojson.Peliculas[2].poster +" /></li><a>");
 		document.write("<li><a href=films/"+4+".html><img class=movi  src="+ objetojson.Peliculas[4].poster +" /></li><a>");
 		document.write("<li><a href=films/"+6+".html><img class=movi  src="+ objetojson.Peliculas[6].poster +" /></li><a>");
 	}
function showPremieresMovie()
 {
 		document.write("<li><a href=films/"+1+".html><img class=movi  src="+ objetojson.Peliculas[1].poster +" /></li><a>");
 		document.write("<li><a href=films/"+5+".html><img class=movi  src="+ objetojson.Peliculas[5].poster +" /></li><a>");
 		document.write("<li><a href=films/"+6+".html><img class=movi  src="+ objetojson.Peliculas[6].poster +" /></li><a>");
 	}
function Filt()
{
	var sel=document.getElementById('Select').value;
	if(sel=="All")
	{
		document.getElementById('All').style.display='block';
		document.getElementById('Popular').style.display='none';
		document.getElementById('Premieres').style.display='none';
	}
	else if(sel=="Popular")
	{
		document.getElementById('All').style.display='none';
		document.getElementById('Popular').style.display='block';
		document.getElementById('Premieres').style.display='none';
	}
	else if(sel=="Premieres")
	{
		document.getElementById('All').style.display='none';
		document.getElementById('Popular').style.display='none';
		document.getElementById('Premieres').style.display='block';
	}
	else
	{
		document.getElementById('All').style.display='block';
		document.getElementById('Popular').style.display='none';
		document.getElementById('Premieres').style.display='none';
	}
}
function ShowArr(ids)
{
	for(var i = 0;i<=objetojson.Peliculas.le;i++)
	{
		if(i==ids)
		{
		var Id = objetojson.Peliculas[i].id;
		var Title= objetojson.Peliculas[i].title;
		var year = objetojson.Peliculas[i].year;
		var Release = objetojson.Peliculas[i].released;
		var genere = objetojson.Peliculas[i].genre;
		var director = objetojson.Peliculas[i].director;
		var actors = objetojson.Peliculas[i].actors;
		var plot = objetojson.Peliculas[i].plot;
		var poster = objetojson.Peliculas[i].poster;
		var rating= objetojson.Peliculas[i].rating;
		document.write("<div><li> Nro "+(Id)+" <h1>"+Title+ "</h1> <li>Rating</li> "+rating+"</br></li><li><img class=movi src="+poster+" /></li><li><p>"+year+" </p></li><li><p>"+Release+"</p></li><li><h3>"+genere+"</h3></li><li><h2>"+director+"</h2></li><li><h3>"+actors+"</h3></li><li><article>"+plot+"</article></li></div></br>");
	    }
	}
	
}
function showNLastMovie(ids)
{
	var j=1;
	for (var i = objetojson.Peliculas.length-1; j <= ids; i--) 
	{
        var poster =objetojson.Peliculas[i].poster;
        document.write("<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>");
        j++;
    }
}