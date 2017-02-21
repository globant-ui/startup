$(function () {

  $(".hidden").fadeIn("slow", function() {
    $(".alias").show().focus();
  });

  $("#bootcamp-btn").click(function() {

    $hidden = $(".hidden");
    
    /* Bootcamp name service (currently not working) */
    $.ajax({
      type: "POST",
      url: "http://bootcamp.aws.af.cm/welcome/yourname",
      data: { },
      success: function(response) {
        $hidden.text(response).css("color", "blue");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $hidden.text("No response from the service (http://bootcamp.aws.af.cm/welcome/yourname) link not working").css("color", "red");
      }
    });

    searchAlbum("Rolling Stones");

  });

  $("#spotify-btn").click(function() {
    var album = $("input").val();
    searchAlbum(album);
  });

  function searchAlbum(album) {
    $aside = $("aside");

    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/search",
      data: { q: album, type: "album" },
      success: function (response) {
        var articles = [];
        for (var i = 0; i < response.albums.items.length; i++) {
          articles += "<article class=\"albums\"><img src=" + response.albums.items[i].images[0].url +"><h5>Name: " + response.albums.items[i].name + "</h5><p>Type: " + response.albums.items[i].type + "</p><p>Release date: " + response.albums.items[i].release_date + "</p><a href=" + response.albums.items[i].href + ">Direct link</a></article>";
        };

        $aside.html(articles);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $aside.html("No response from the service").css("color", "red");
      }
    });
  }
});
