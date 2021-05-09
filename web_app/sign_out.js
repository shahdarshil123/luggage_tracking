const LogoutUser = document.getElementById('logout');

function sign_out(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Logged Out successfully!");
      window.localStorage.removeItem("email");
      window.alert("Logged out!");
      window.location.replace("login.html");
    }).catch((error) => {
      // An error happened.
      console.log("An error occured");
      window.alert("Error while logging out. Check your network connection");
  });
}


LogoutUser.addEventListener("click", (e)=>{
	e.preventDefault();
  sign_out()
})
