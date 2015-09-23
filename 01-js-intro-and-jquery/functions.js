$(document).ready(function(){
    $('#txt_hide').hide().fadeIn(1000); /* Nice using chain of methods. The html element should be hide with css. */
    $('#txt_name').focus();
    $('#bt_Accept').click(function(){
    var value=$('#txt_name').val();
    $.ajax({
            url:"http://bootcamp.aws.af.cm/welcome/"+value,
            dataType: 'json',
            success: function(data){
                if (data.error){
                    $('#response').text(data.error).addClass('error');
                }
                else{
                    $('#response').text(data.response).removeClass('error');
                }
            },
            error: function(textStatus){
                $('#txt_error').text(textStatus).addClass('error');
            },
        });
        $('#txt_name').val('');
    });
    $('#bt_Search').click(function(){
        var search=$('#txt_search').val();
        if (search==''){/* Nice validation! */
             $('#txt_error').text("First enter an album to find...").addClass('error');/* Good using chaing of methods. */
        }
        else
        {
        $.ajax({
            url: "https://api.spotify.com/v1/search",
            data: "q="+search+"&type=album",
            dataType: 'json',
            success: function(data){
                    $('.albumnes').html('');
                    if (data.albums.total==0){/* Great validation */
                        $('#txt_error').text("Artist not found").addClass('error');
                    }
                    else
                    {
                        $('#txt_error').text('').removeClass('error');
                        $.each(data.albums['items'], function(i){
                        var url_date=(data.albums['items'][i].href);
                        $.ajax({
                            url: url_date,
                            dataType: 'json',
                            success: function(data2){
                                var album="<section class='cont_style'><img class='picture' src="+data.albums['items'][i]['images']['2'].url+">" /* It should be an <article> */
                                     +"<br>"+"<p class='text_style'>"+data.albums['items'][i].type+"</p>"
                                     +"<p class='text_style'>"+data.albums['items'][i].name+"</p>" /* It should be a <header> */
                                     +"<p class='text_style'>"+data2.release_date+"</p>"
                                     +"<a class='link' href="+data.albums['items'][i].external_urls.spotify+">Go to album</a><br><br></section>";                                
                                     $('.albumnes').append(album);
                            },
                            error: function(textStatus){
                                 $('#txt_error').text(textStatus).addClass('error');
                                },
                            });
                        });
                }
        },
        error: function(textStatus){
            $('#txt_error').text(textStatus).addClass('error');
        },
        });
    }
    $('#txt_search').val('');
    });
});