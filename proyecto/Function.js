function showAllMovie()
{for (var i = 0; i <= objetojson.length; i++) {
           var poster =objetojson[i].poster;
        document.write("<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>");}
    }
function showPopularMovie()
 {
 		document.write("<li><a href=films/"+1+".html><img class=movi  src="+ objetojson[1].poster +" /></li><a>");
 		document.write("<li><a href=films/"+2+".html><img class=movi  src="+ objetojson[2].poster +" /></li><a>");
 		document.write("<li><a href=films/"+4+".html><img class=movi  src="+ objetojson[4].poster +" /></li><a>");
 		document.write("<li><a href=films/"+6+".html><img class=movi  src="+ objetojson[6].poster +" /></li><a>");
 	}
function showPremieresMovie()
 {
 		document.write("<li><a href=films/"+1+".html><img class=movi  src="+ objetojson[1].poster +" /></li><a>");
 		document.write("<li><a href=films/"+5+".html><img class=movi  src="+ objetojson[5].poster +" /></li><a>");
 		document.write("<li><a href=films/"+6+".html><img class=movi  src="+ objetojson[6].poster +" /></li><a>");
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
	for(var i = 0;i<=objetojson.length;i++)
	{
		if(i==ids)
		{
		var Id = objetojson[i].id;
		var Title= objetojson[i].title;
		var year = objetojson[i].year;
		var Release = objetojson[i].released;
		var genere = objetojson[i].genre;
		var director = objetojson[i].director;
		var actors = objetojson[i].actors;
		var plot = objetojson[i].plot;
		var poster = objetojson[i].poster;
		var rating= objetojson[i].rating;
		document.write("<div><li> Nro "+(Id)+" <h1>"+Title+ "</h1> <li>Rating</li> "+rating+"</br></li><li><img class=movi src="+poster+" /></li><li><p>"+year+" </p></li><li><p>"+Release+"</p></li><li><h3>"+genere+"</h3></li><li><h2>"+director+"</h2></li><li><h3>"+actors+"</h3></li><li></div><div><article>"+plot+"</article></li></div></br>");
	    }
	}
	
}
function showNLastMovie(ids)
{
	var a=objetojson.sort(function (a, b){
    return (b.released - a.released)
})
	var j=1;
	for (var i = a.length-1; j <= ids; i--) 
	{
        var poster =a[i].poster;
        document.write("<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>");
        j++;
    }
}
function search()
{
	var b = document.getElementById("textBox").value;
	var arr=objetojson;
	var i =arr.indexOf(b);
	    var Id = objetojson[i].id;
		var Title= objetojson[i].title;
		var year = objetojson[i].year;
		var Release = objetojson[i].released;
		var genere = objetojson[i].genre;
		var director = objetojson[i].director;
		var actors = objetojson[i].actors;
		var plot = objetojson[i].plot;
		var poster = objetojson[i].poster;
		var rating= objetojson[i].rating;
	document.write("<div><li> Nro "+(Id)+" <h1>"+Title+ "</h1> <li>Rating</li> "+rating+"</br></li><li><img class=movi src="+poster+" /></li><li><p>"+year+" </p></li><li><p>"+Release+"</p></li><li><h3>"+genere+"</h3></li><li><h2>"+director+"</h2></li><li><h3>"+actors+"</h3></li><li></div><div><article>"+plot+"</article></li></div></br>");
}
function AddFilm(tit,actor,director,uimg,dat,cat,poin,desc)
{
	tit=document.getElementById("Title1").value;
	actor=document.getElementById("actor").value;
	director=document.getElementById("director").value;
	uimg=document.getElementById("urlimg").value;
	dat=document.getElementById("Date").value;
	cat=document.getElementById("Category").value;
	poin=document.getElementById("pto").value;
	desc=document.getElementById("mens").value;
	objetojson["Title"]=tit;
	objetojson["actors"]=actor;
	objetojson["director"]=director;
	objetojson["poster"]=uimg;
	
}