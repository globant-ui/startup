function showAllMovie()
{for (var i = 1; i <= 10; i++) {
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
	var sel=document.getElementById("Select").value;
	if(sel=="All")
	{
		document.getElementById('All').style.display=block;
		document.getElementById('Popular').style.display=none;
		document.getElementById('Premieres').style.display=none;
	}
	else if(sel=="Popular")
	{
		document.getElementById('All').style.display=none;
		document.getElementById('Popular').style.display=block;
		document.getElementById('Premieres').style.display=none;
	}
	else if(sel=="Premieres")
	{
		document.getElementById('All').style.display=none;
		document.getElementById('Popular').style.display=none;
		document.getElementById('Premieres').style.display=block;
	}
	/*else
	{
		document.getElementById('All').style.display=block;
		document.getElementById('Popular').style.display=none;
		document.getElementById('Premieres').style.display=none;
	}*/
}