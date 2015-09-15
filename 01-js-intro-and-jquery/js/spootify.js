var dataAPI =  (function() {
  //Private variables
  var selectedSection = $('article.albums');

  //Private methods
  var searchAlbum = function(artist){ 

    $.ajax({
          url: 'https://api.spotify.com/v1/search',
          dataType: 'json', // ** added in order to iterate with $.each **
          data: {
            q: artist,
            type: 'album'
          },//data

          success: function(data) {
            $.each(data.albums.items, function(index,item) {
                console.log(item);
                selectedSection.append("<p>" + item.name + "</p> " );
                selectedSection.append("<p><img src=" + item.images[1].url + " ></p> ");
                selectedSection.append("<p>" + item.uri + "</p>");
              }); //.each
          }, //success

          error: function(XMLHttpRequest, textStatus, errorThrown) {
              alert("Errors, trying to get the Stones" + errorThrown + textStatus );
          }//error

    })//jQuery.ajax

    .done(function(result) {
        alert(artist + " albums !")
    })//done 

  };//end insertHtmlWithAjax


  //public API
  return {
    searchResult: searchAlbum
  };//end return 
  
})();





var spootifySearch =  (function() {
  //Private variables
  var obj = $(".button-artists");
  var eventType = 'click';
  var ajaxReturn ;

  var getData = function() {
    var artist;
    artist = document.getElementById("search-input").value;
    if (artist) {dataAPI.searchResult(artist); };
    
  };

  var functionDelegate = function() {
    obj.delegate(obj, eventType, getData); 
  };

  //public API
  return {
    searchInSpootify: functionDelegate
  };//end return 
  
})();




//Passing a named function instead of an anonymous function 

$(document).ready(spootifySearch.searchInSpootify());
