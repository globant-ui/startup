$(function () {

  $(".hidden").fadeIn("slow", function() {
    $(".alias").show().focus();
  });

  $("#bootcamp-btn").click(function() {

    $hidden = $(".hidden");
    
    /* Load ajax data */
    $.ajax({
      type: "POST",
      url: "http://bootcamp.aws.af.cm/welcome/yourname",
      data: { },
      success: function(response) {
        $hidden.text(response).css("color", "blue");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $hidden.text("No response from the service").css("color", "red");
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
        $article = $("<article><img src=" + response.albums.items[1].images[0].url + "><text>Name: " + response.albums.items[1].name + "</text><br><text>Type: " + response.albums.items[1].type + "</text><br><text>Release date: " + response.albums.items[1].release_date + "</text><br><a href=" + response.albums.items[1].href + ">Direct link</a></article>");
        $aside.html($article);
        console.log(response.albums);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $aside.html("No response from the service").css("color", "red");
      }
    });
  }
});
