var spootifyAjaxResponse = function(paramUrl,paramDataTypeSearch,paramArtist) {
var htmlResult = '';
 $.ajax({
          url: paramUrl,
          dataType: 'json', // ** added in order to iterate with $.each **
          data: {
            q: paramArtist,
            type: paramDataTypeSearch
          },//data

          success: function(data) {
            $.each(data.albums.items, function(index,item) {
                console.log(item);
                htmlResult = htmlResult + ("<p>" + item.name + "</p> <p><img src=" + item.images[1].url + " ></p><p>" + item.uri + "</p>");
              }); //.each
          }, //success

          error: function(XMLHttpRequest, textStatus, errorThrown) {
              alert("Errors, trying to get the Stones" + errorThrown + textStatus );
          }//error
    })//jQuery.ajax
              
  return htmlResult;           

};

//Module Patter Function
var dataAPI =  (function() {
  //Private variables
  var selectedSection = $('article.albums');
  var htlmResult = '';
  //Private methods
  var searchAlbum = function(artist) { 
    htlmResult = spootifyAjaxResponse('https://api.spotify.com/v1/search','album',artist);
    selectedSection.append(htlmResult);   
  };//end insertHtmlWithAjax

  //public API
  return {
    searchResult: searchAlbum
  };//end return 
})();

//Module Patter Function
var spootifySearch =  (function() {
  //Private variables
  var obj = $(".button-artists");
  var eventType = 'click';
  var ajaxReturn ;

  var getData = function() {
    var artist;
    artist = document.getElementById("search-input").value;
    if (artist) {
      dataAPI.searchResult(artist);
       };//end if
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
spootifySearch.searchInSpootify();
