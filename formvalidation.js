
//function to validate email
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitButton").click(function(){
	
	var errorMessage = "";
	var fieldsMissing = "";

	//check email
	if($("#email").val() == ""){
		fieldsMissing += "<br>Email";
	}

	if(!isEmail($("#email").val())){
		errorMessage += "<p>Your email address is not valid</p>";
	}

	//check phone
	if($("#phone").val() == ""){
		fieldsMissing += "<br>Telephone";
	}

	if(!$.isNumeric($("#phone").val())){
		errorMessage += "<p> Your phone number is not numeric</p>";
	}

	//check password confirm

	if($("#password").val() == ""){
		fieldsMissing += "<br>Password";
	}

	if($("#passwordConfirm").val() == ""){
		fieldsMissing += "<br>Confrim Password";
	}


	if($("#password").val() != $("#passwordConfirm").val()){
		errorMessage += "</p> Your passwords don't match</p>";
	}


	if(fieldsMissing != ""){
		errorMessage = "<p>The following field(s) are missing:" + fieldsMissing + errorMessage;
	}

	//Display error message if any
	if(errorMessage != ""){
		$("#errorMessage").html(errorMessage);
	}
	//success!
	else{
		$("#successMessage").show(); //or css.display
		$("#errorMessage").hide();
	}


});


