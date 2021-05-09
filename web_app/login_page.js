const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function auth(email,password){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    get_info();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage);
    loginErrorMsg.style.opacity = 1;

  });
}

function get_info(){
  var user = firebase.auth().currentUser;
  var db = firebase.firestore();
  email = user.email;
  window.localStorage.setItem("email",email);

    var docRef = db.collection("users").doc(email);
    docRef.get().then(function(doc){
      var data = doc.data();
      console.log(data);

      name = data.name;
      phone = data.phone;
      uid = data.uid;
      latitude = data.latitude;
      longitude = data.longitude;
      

      window.alert("Welcome, "+ data.name+" to IoT based smart tracking system!");
      window.location.replace("google_maps.html");
    });
    
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
	const email = loginForm.email.value;
	const password = loginForm.password.value;

  window.onload = auth(email,password);
  
})

