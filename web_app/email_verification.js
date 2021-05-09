function verify() {
	// body...
	var user = firebase.auth().currentUser;

	user.sendEmailVerification().then(function() {
 		 // Email sent.
	}).catch(function(error) {
  		// An error happened.
	});
}


const button = document.getElementById("button");
const user_email= document.getElementById("email");

function reset(){
	var auth = firebase.auth();
	var emailAddress = user_email.value;

	auth.sendPasswordResetEmail(emailAddress).then(function() {
  		// Email sent.
  		console.log("email has been sent to: "+ emailAddress);
	}).catch(function(error) {
  		// An error happened.
  		console.log("Error has occured");
	});
}

button.addEventListener("click",(e) => {
	e.preventDefault();
	reset();
});