/**
 * Created by maxi on 13/09/15.
 */
$(document).on('ready', function(){
    var $section = $('.section');

    $section.show(2000, function(){
       $('.alias').focus();
    });

    $('.btn').on('click', function(){
        $.ajax({
            url: 'http://bootcamp.aws.af.cm/welcome/Maxi',
            success: function(resp){
                console.log(resp);
                $section.html(resp.response);
            },
            error: function(jqXHR, status, error) {
                console.log(error);
                console.log(status);
                $section.css('background-color', 'red');
            },
            complete: function(jqXHR, response) {
                console.log(response);
            }
        })
    });
});