function checkFields(){ //This could be done with field "required"
		var right=true;
		var texts=$('input[type="text"]');
		var email=$('input[type="email"]');
		var select=$('select');
		var bday=$('input[type="date"]');
		var bio=$('textarea');

		//"texts" is already a jquery object. You could use texts.each(function(){...
		$(texts).each(function(){
			//You are instantiating "this" more than needed. Performance risk.
			/*
				var self = $(this); 
				if(self.val()==''){
				right=false;
				self.addClass('error');
			}
			*/
			if($(this).val()==''){
				right=false;
				$(this).addClass('error'); //Good adding class instead of css attributes
			}
		});
		if ($(email).val()==''){
			right=false;
			$(email).addClass('error');
		}
		if ($(select).val()==''){
			right=false;
			$(select).addClass('error');
		}
		if($(bday).val()==''){
			right=false;
			$(bday).addClass('error');
		}
		if ($(bio).val()==''){
			right=false;
			$(bio).addClass('error');
		}
		return right;
	};

function cleanFields(){
		//You are searching elements more than needed. Keep them in variables. e.g. var email = $('#email');
		//You can chaing methids. See this: http://www.w3schools.com/jquery/jquery_chaining.asp
		/*
			Nicer approach:
			$('input[type="text"], #email, #bday, #sport, #bio').val('').removeClass('error');
		*/
		$('input[type="text"]').val('');
		$('#email').val('');
		$('#bday').val('');
		$('#sport').val('');
		$('input[type="text"]').removeClass('error');
		$('#bio').val('');
		$('#email').removeClass('error');
		$('#bday').removeClass('error');
		$('#sport').removeClass('error');
		$('#bio').removeClass('error');
};//This could be done with <input type="reset" value="Clean">

$(document).ready(function(){
		$('#bt_signup').click(function() { //This could be done with <input type="submit" value="Sign Up">
			if (!email.validity.valid){
				alert(email.validationMessage);
			}
			else {
				if (checkFields()==true){
				alert("Full Registration");
				cleanFields();
				}
				else
				{
					alert("Fill in all fields");
					$('input[type="text"]').click(function(){
							$(this).removeClass('error');
					});
					$('select').click(function(){
						$(this).removeClass('error');
					});

					//In IE, even when date was selected, red border is shown.
					$('input[type="date"]').change(function(){
						$(this).removeClass('error');
					});
					
					$('input[type="email"]').click(function(){
						$(this).removeClass('error');
					});
					$('textarea').click(function(){
						$(this).removeClass('error');
					});
				}
			}
		});
		$('#bt_clean').click(function(){
			cleanFields();
		});
});