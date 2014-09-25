/*
  BootCamp 2014 - Globant
  Topic1:  JavaScript Intro and jQuery

  Author: Juan Ojeda
*/


$(document).ready(function(){

	$("#section1").fadeIn(3000, function(){
									$("#textbox1").focus();
                });

	$("#boton1").click(function(){

		$.post("http://bootcamp.aws.af.cm/welcome/juan",
			function(datos) {
 				$("#textbox1").val(datos["response"].substr(0,8) + datos["response"].substring(8).toUpperCase() );
			})
  			.fail(function() {
				$("#textbox1").val("Server Error");
				$("#textbox1").css("background-color","red");
 			});  		
		});	
	
 	$.ajax({
  		type: "get",
  		url: "http://tweetproxy.ap01.aws.af.cm/search",
  		data: "q=html5",
  		dataType: "jsonp",
  		success: function(tweets){
  				$(".tableTweets").append("<caption> Search results for: html5</caption>");
  				
  				$.each(tweets.statuses,function(index, value){

  				$(".tableTweets").append("<tr><td>"
  					+ "<img src=\"" + value["user"]["profile_image_url"] + "\">"
  					+ "<br>"	
  					+ "userName: " + value["user"]["name"].bold()
  					+ "<br>"
  					+ "createdAt: " + value["created_at"].italics().small()
  					+ "<br>"
					+ "tweet: " + value["text"].fontcolor("green")
  					+ "</td></tr>");
  				});
  				
  			},

	});

});