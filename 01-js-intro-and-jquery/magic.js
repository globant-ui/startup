//fadeIn
$(document).ready(function(){
	$(window).load(function () {
	        $(".hiddenhelloworld").fadeIn(2000, function() {$('.alias').focus();});
	    });
    });

$(document).ready(function(){
            $("button").click(function(){
                $.get("http://bootcamp.aws.af.cm/welcome/"+ $(".alias").val(), function(data, status){
                    if (status == "success") {
                        var parse2 = data.response.substr (8);
                        var parse1 = data.response.slice (0,8);
                        $(".hiddenhelloworld").html(parse1 + parse2);
                    }
                    else{
                        $(".hiddenhelloworld").addClass("error");
                        $(".hiddenhelloworld").html("An error has ocurred!!"+ "<br>"+"Status: "+ status + "<br>"+ "Server answer: " + data.response);
                    };
                });
            });
        });