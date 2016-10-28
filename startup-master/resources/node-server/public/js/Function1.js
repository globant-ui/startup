 var objetojson=[{"id":1,"title":"Funny People","year":"2009","released":"2009-04-29T00:00:00.0Z","genre":"Comedy, Drama","director":"Judd Apatow","actors":"Adam Sandler, Seth Rogen","plot":"When seasoned comedian George Simmons learns of his terminal, inoperable health condition, his desire to form a genuine friendship causes him to take a relatively green performer under his wing as his opening act.","poster":"http://ia.media-imdb.com/images/M/MV5BMTMxNDQ5MTA5MF5BMl5BanBnXkFtZTcwMzUyMDUwMg@@._V1_SX300.jpg","rating":2},
{"id":2,"title":"The Hangover Part II","year":"2011","released":"2011-05-26T00:00:00.0Z","genre":"Comedy","director":"Todd Phillips","actors":"Bradley Cooper, Zach Galifianakis","plot":"Right after the bachelor party in Las Vegas, Phil, Stu, Alan, and Doug jet to Thailand for Stu's wedding. Stu's plan for a subdued pre-wedding brunch, however, goes seriously awry.","poster":"http://ia.media-imdb.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_SX320.jpg","rating":3.5},
{"id":3,"title":"Fight Club","year":"1999","released":"1999-10-15T00:00:00.0Z","genre":"Drama","director":"David Fincher","actors":"Edward Norton, Brad Pitt","plot":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...","poster":"http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX300.jpg","rating":4.5},
{"id":4,"title":"Toy Story","year":"1995","released":"1995-01-22T00:00:00.0Z","genre":"Animation, Adventure, Comedy","director":"John Lasseter","actors":"Tom Hanks, Tim Allen","plot":"A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.","poster":"http://ia.media-imdb.com/images/M/MV5BMTgwMjI4MzU5N15BMl5BanBnXkFtZTcwMTMyNTk3OA@@._V1_SX300.jpg","rating":4.2},
{"id":5,"title":"Forrest Gump","year":"1994","released":"1994-07-06T00:00:00.0Z","genre":"Drama, Romance","director":"Robert Zemeckis","actors":"Tom Hanks, Rebecca Williams","plot":"Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.","poster":"http://ia.media-imdb.com/images/M/MV5BMTI1Nzk1MzQwMV5BMl5BanBnXkFtZTYwODkxOTA5._V1_SX300.jpg","rating":4.3},
{"id":6,"title":"Shrek","year":"2001","released":"2001-05-18T00:00:00.0Z","genre":"Animation, Adventure, Comedy","director":"Andrew Adamson","actors":"Mike Myers, Eddie Murphy","plot":"After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.","poster":"http://ia.media-imdb.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg","rating":4.5},
{"id":7,"title":"Inglourious Basterds","year":"2009","released":"2009-08-21T00:00:00.0Z","genre":"Adventure, Drama, War","director":"Quentin Tarantino","actors":"Brad Pitt, Christoph Waltz","plot":"In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.","poster":"http://ia.media-imdb.com/images/M/MV5BMjIzMDI4MTUzOV5BMl5BanBnXkFtZTcwNDY3NjA3Mg@@._V1_SX300.jpg","rating":3.9},{"id":8,"title":"Apoclaypse Now","year":"1979","released":"1979-08-15T00:00:00.0Z","genre":"Drama, War","director":"Francis Ford Coppola","actors":"Marlon Brando, Martin Sheen","plot":"During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade colonel who has set himself up as a god among a local tribe.","poster":"http://ia.media-imdb.com/images/M/MV5BMTcyMzQ5NDM4OV5BMl5BanBnXkFtZTcwODUwNDg3OA@@._V1_SX300.jpg","rating":3.7},
{"id":9,"title":"The Pianist","year":"2003","released":"2003-03-28T00:00:00.0Z","genre":"Biography, Drama, War","director":"Roman Polanski","actors":"Adrien Brody, Emilia Fox","plot":"A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.","poster":"http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg","rating":3.5},
{"id":10,"title":"A clockwork Orange","year":"1971","released":"1972-02-02T00:00:00.0Z","genre":"Crime, Drama, Sci-Fi","director":"Stanley Kubrick","actors":"Malcolm McDowell, Patrick Magee","plot":"In future Britain, charismatic delinquent Alex DeLarge is jailed and volunteers for an experimental aversion therapy developed by the government in an effort to solve society's crime problem","poster":"http://ia.media-imdb.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg","rating":4.7}];
/*var newArr = JSON.parse(objetojson, dateReviver);

function dateReviver(key, value){
   var a;
   if (typeof value === 'string'){
       a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
       if (a) {
           return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
       }
   }
   return value;
};*/
function PrintMovies(arr)
{
  var images="<tr>"
  var max=0;
  for(var i =0;i<arr.length;i++){
    var string ="<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>";
  }
}
/*
var ArrRealize= objetojson.filter(function(obj){return obj.rating>=4});
  var ArrPremier=objetojson.filter(function(obj){return obj.year>=2000});
  var Arr1=objetojson.filter(function(obj){return obj.title.indexOf(texV)!= -1});
  var Arr2=objetojson.filter(function(obj){return obj.actors.indexOf(texV)!= -1});
  var Arr3=objetojson.filter(function(obj){return obj.plot.indexOf(texV)!= -1}); 
function showAllMovie(arr){
  var a=[];
  for (var i = 0; i < arr.length; i++) {
           var poster = arr[i].poster;
           var x="<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>"
           a[i]=x;
           document.getElementById('verMovies').innerHTML= a;
       }
     }

/*
function fitTxt(obj,ele)
{
	var opt1=obj.title.indexOf(ele);
	var opt2=obj.actors.indexOf(ele);
	var opt3=obj.plot.indexOf(ele);
	if(opt1+opt2+opt3==-3){
		return false;
	}
	else
	{
		return true;
	}
}

function showNLastMovie(ids)
{
	var arr=objetojson;
    arr.sort(function(a, b){return a.released - b.released});
	var j=1;
	for (var i = a.length-1; j <= ids; i--) 
	{
        var poster =a[i].poster;
        document.write("<li><a href=films/"+i+".html><img class=movi src="+ poster +" /></li><a>");
        j++;
    }
}*/
/*
function FiltGen()
{
	  var tmp = objetojson;
    var text = "";
    var gen = [];
    
    //In the new array gen, save all the genres like strings
    for (i = 0; i < tmp.length; i++) {
        gen.push(tmp[i].genre);
    }    

    //Make a unique string with all the gen elements, then split by ", "
    text = gen.toString();
    var text1 = text.split(", ");
    var text2 = text1.toString();

    //Create the arrayOriginal making text2 into array type and then implement algorithm
    var arrayOriginal = text2.split(",");
    var arrayResult = [];
    var arrGEN=[];
    var arrayResult = arrayOriginal.filter(function(elem, pos){return arrayOriginal.indexOf(elem) == pos;});
    for(var j=0;j<arrayResult.length;j++)
    {
      arrGEN[j]=("<option value="+arrayResult[j]+">"+arrayResult[j].toString()+"</option>");
    }
    document.getElementById('SelectGen').innerHTML= arrGEN.toString();*/
}