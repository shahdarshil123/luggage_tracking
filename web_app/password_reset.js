const button = document.getElementById("button");
const button2 = document.getElementById("signup");
const user_email= document.getElementById("email");

function reset(){
	var auth = firebase.auth();
	var emailAddress = user_email.value;

	auth.sendPasswordResetEmail(emailAddress).then(function() {
  		// Email sent.
  		console.log("email has been sent to: "+ emailAddress);
  		window.alert("Reset link sent to: "+ emailAddress);
  		window.location.replace("login.html");
	}).catch(function(error) {
  		// An error happened.
  		window.alert("Invalid Email_id. \n If not registerd please sign up.");
  		console.log("Error has occured");
	});
}

button.addEventListener("click",(e) => {
	e.preventDefault();
	reset();
});

button2.addEventListener("click", (e) => {
	e.preventDefault();
	window.location.replace("signup.html");
})