const SignupButton = document.getElementById("signup-form-submit");
const SignupUser = document.getElementById("new-user");



function new_user(email, password, name, phone){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        adduser(user,name, phone)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: "+errorMessage)
        window.alert(errorMessage);
        window.location.replace("login.html");
      });

}

function adduser(user,name, phone){

  var db = firebase.firestore();
  db.collection("users").doc(user.email).set({
      name: name,
      latitude: 19.1572803,
      longitude: 72.8479231,
      email_id: user.email,
      phone: String(phone),
      UID: user.uid
  })
  .then(function() {
      console.log("Document successfully written!");
      console.log("User created in firebase");
      window.localStorage.setItem("email",user.email);
      window.alert("User Created");
      location.replace("login.html");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}


SignupButton.addEventListener("click", (e) =>{
  e.preventDefault();
  const name = SignupUser.name.value;
  const phone = SignupUser.phone.value;
  const email = SignupUser.email.value;
  const password = SignupUser.password.value;
  const re_password = SignupUser.re_password.value;
  
  if(password === re_password){
    new_user(email,password, name, phone);
  }
  else{
    window.alert("password not matching");
    SignupUser.password.value = "";
    SignupUser.re_password.value = "";
  }
  
});



