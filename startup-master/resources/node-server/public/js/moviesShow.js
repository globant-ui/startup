$(document).ready(function () {
    showDesc();
});


function showDesc() {

    $.ajax({
        url: '/api/movies/' + getURLParameter('id'),
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
        $('.movieDesc').html("<div ><img style=width:70% height:60% src='image/LOADING.png'/></div>");
        },
        success: function(mov) {
            $(".movieDesc").html("");
            $(".movieDesc").append("<h2>" + mov.title + " (" + mov.year + ")</h2>");
            $(".movieDesc").append("<img class=movi src='"+ mov.poster +"'>");
            $(".movieDesc").append("<h2> Rating: " + mov.rating + "</h2><br>")
            $(".movieDesc").append("<span> Director: " + mov.director + "</span> <br>");
            $(".movieDesc").append("<span> Actors: " + mov.actors + "</span> <br>");
            $(".movieDesc").append("<article> Plot: " + mov.plot + "</article><br>");
             }
        }); 
}


function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}