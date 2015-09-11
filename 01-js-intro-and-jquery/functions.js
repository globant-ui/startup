$(document).ready(function(){
    $('#txt_hide').hide();
    $('#txt_name').focus();
    $('#txt_hide').fadeIn(1000);
    $('#bt_Accept').click(function(){
        var value=$('#txt_name').val();
        $.ajax({
            url:"http://bootcamp.aws.af.cm/welcome/"+value,
            dataType: 'json',
            success: function(data){
                if (data.error){
                    $('#response').text(data.error);
                    $('#response').addClass('error');
                }
                else{
                    $('#response').text(data.response);
                    $('#response').removeClass('error');
                }
            },
            error: function(textStatus){
                $('#txt_error').text(textStatus);
                $('#txt_error').addClass('error');
            },
        });
        $('#txt_name').val('');
    });
    $('#bt_Search').click(function(){
        var search=$('#txt_search').val();
        if (search==''){
             $('#txt_error').text("First enter an album to find...");
             $('#txt_error').addClass('error');
        }
        else
        {
        $.ajax({
            url: "https://api.spotify.com/v1/search",
            data: "q="+search+"&type=album",
            dataType: 'json',
            success: function(data){
                    $('.albumnes').html('');
                    if (data.albums.total==0){
                        $('#txt_error').text("Artist not found");
                        $('#txt_error').addClass('error');
                    }
                    else
                    {
                    $('#txt_error').text('');
                    $('#txt_error').removeClass('error');
                    $.each(data.albums['items'], function(i){
                        var url_date=(data.albums['items'][i].href);
                        $.ajax({
                            url: url_date,
                            dataType: 'json',
                            success: function(data2){
                                var album="<div class='cont_style'><img class='picture' src="+data.albums['items'][i]['images']['2'].url+">"
                                     +"<br"+"<p class='text_style'>"+data.albums['items'][i].type+"</p>"
                                     +"<p class='text_style'>"+data.albums['items'][i].name+"</p>"
                                     +"<p class='text_style'>"+data2.release_date+"</p>"
                                     +"<a class='link' href="+data.albums['items'][i].external_urls.spotify+">Go to album</a><br><br></div>";                                
                                     $('.albumnes').append(album);
                            },
                            error: function(textStatus){
                                 $('#txt_error').text(textStatus);
                                 $('#txt_error').addClass('error');

                            },
                        });
                    });
                }
        },
        error: function(textStatus){
            $('#txt_error').text(textStatus);
            $('#txt_error').addClass('error');
        },
        });
    }
    $('#txt_search').val('');
    });
});