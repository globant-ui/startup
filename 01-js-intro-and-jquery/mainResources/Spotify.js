// Will Run on DOM Ready!
$(document).ready(function ()
{
  $('#search').click(search);
});

// Handle a good response from ajax
function manageResponse(data)
{
  // Get all items
  $.each(data.albums.items, function (index, value)
  {
    var release = '';
    // Get Ajax for release date, we dont use async for save a variable directly w/o callback!
    $.ajax({
      type    : 'GET',
      url     : value.href,
      async   : false, /* Why?! It doesn't have a good performance! */
      dataType: 'json',
      error   : function (fstp, status, error)
      {
        console.log('error: ' + fstp.responseText); /* Why don't have one error function for all errors? */
      },

      success: function (response)
      {
        release = response.release_date;
      }
    });

    // Html Element Target
    var htmlTarget = $('#result');
    htmlTarget.html(htmlTarget.html() +
      '<article class="box result">' + /* Good using <article> */
      '<div class="img-container">' +
      '<img src="' + value.images[2].url + '" alt="' + value.name + '"/>' +
      '</div>' +
      '<div class="content-container">' +
      '<p><strong>' + value.name + '</strong></p>' + /* It should be a <header> */
      '<p><em>' + value.album_type + ', ' + release + '</em></p>' +
      '<p><a href="' + value.external_urls.spotify + '" target="_blank">See it on Spotify!</a></p>' + /* <a> should be alone */
      '</div>' +
      '</article>');
  });
}

function manageError(xhr, status, error)
{
  // Html Element Target
  var htmlTarget = $('#result');
  htmlTarget.html(htmlTarget.html() +
    '<article id="result" class="box">' + /* An error is not an <article> */
    '<div class="content-container">' +
    '<p><strong>ERROR: ' + error + ' - ' + status + ' </strong></p>' +
    '<p><em>' + xhr.responseText + '</em></p>' +
    '</div>' +
    '</article>');
}

function search()
{
  $('#result').html('');
  // Get the response
  $.ajax({
    type    : 'GET',
    url     : 'https://api.spotify.com/v1/search?q=' + $('#searchData').val() + '&type=album',
    async   : true,
    dataType: 'json',
    error   : manageError,
    success : manageResponse
  });
}