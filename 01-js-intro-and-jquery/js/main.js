$(document).ready(function() {
  $('#search-input').focus();

  var searchCall = function(keyword){
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        type: 'get',
        data: {
          q: keyword,
          type: 'track'
        },
        success: function (data) {
          showResult(data);
        },
        error: function(xhr, status, error) {
          $('#error').html("<p>Error: " + xhr.statusText + "</p>");
        }
      });
  };

  var showResult = function(results){
    if(results.tracks.items.length > 0)
    {
      //each and show result
      $(results.tracks.items).each(function(index, track) {
        console.log(track);
        //convert ms to minutes
        var durationMinutes = parseFloat((track.duration_ms/60000).toFixed(2));
        var count = 0;
        var artists = '';
        $(track.artists).each(function(index, artist) {
          //if is not the first artist append a coma
          if(count === 0)
          {
            artists = artist.name;
          }
          else
          {
            artists += ', '+artist.name;
          }
        });
        //append track name, artists, and duration to list
        $('.list').append("<li>"+ track.name+" - " + artists + " - " + durationMinutes + "</li>")
      });
    }
    else
    {
      $('#no-results').html("<p>No results</p>");
      console.log('No results');
    }
  };

  $('#button').click(function() {
    // get de input value
    var track = $('#search-input').val();
    $('.hidden').hide();
    //Clear list items
    $('.list').empty();
    //Clear error
    $('#error').empty();
    //Clear no results message
    $('#no-results').empty();
    searchCall(track);
    //show section
    $('.hidden').fadeIn();
  });

});