const button = document.getElementById("button");
const user_name = document.getElementById("user-name");
const user_phone = document.getElementById("user-phone");

function update(){
	var db = firebase.firestore();
	var email = window.localStorage.getItem("email");
	var docRef = db.collection("users").doc(email);

	if(user_name.value == ""){
		console.log("no value");
	}
	else{
		console.log(user_name.value);
		docRef.update({"name": user_name.value}).then(function (){
			console.log("name updated");
		})
	}
	if(user_phone.value == ""){
		console.log("no value");
	}
	else{
		console.log(user_phone.value);
		docRef.update({"phone": user_phone.value}).then(function (){
			console.log("phone updated");
		})
	}
}
button.addEventListener("click", (e) => {
	e.preventDefault();
	update();
})