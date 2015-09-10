function checkFields(){ //This could be done with field "required"
		var right=true;
		var texts=$('input[type="text"]');
		var email=$('input[type="email"]');
		var select=$('select');
		var bday=$('input[type="date"]');
		var bio=$('textarea');
		$(texts).each(function(){
			if($(this).val()==''){
				right=false;
				$(this).addClass('error');
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