
window.onload = function(){
  const LogoutUser = document.getElementById('logout');
  var db = firebase.firestore();
  var email = window.localStorage.getItem("email");
  if(email != null){
      var docRef = db.collection("users").doc(email);
      console.log(email);
      docRef.get().then( function(doc){
     /* 	document.getElementById("user-name").innerHTML = "Name: "+ doc.data().name;
      	document.getElementById("user-phone").innerHTML = "Phone: "+ doc.data().phone;
      	document.getElementById("user-email").innerHTML = "Name: "+ doc.data().email_id;
      	document.getElementById("user-latitude").innerHTML = "Latitude: "+ doc.data().latitude;
      	document.getElementById("user-longitude").innerHTML = "Longitude: "+ doc.data().longitude; */
        console.log("Name: "+ doc.data().name);
        console.log("Phone: "+ doc.data().phone);
        console.log("Email_id: "+ doc.data().email_id);
      	initMap(doc.data());
      });
      docRef.onSnapshot( function(doc){
        console.log(doc.data());
        //document.getElementById("user-latitude").innerHTML = "Latitude: "+ doc.data().latitude;
      	//document.getElementById("user-longitude").innerHTML = "Longitude: "+ doc.data().longitude;
        initMap(doc.data());
      });
    }
    else{
      console.log("No document found");
      window.alert("Not logged in?");
      window.location.replace("login.html");
      //window.location.replace("login.html");
    }

    function initMap(data) {
  var position = { lat: data.latitude, lng: data.longitude };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
  });

  const marker = new google.maps.Marker({
    position: position,
    map: map,
  });
 
 const contentString = '<div>'+ "<b>"+data.name+"<b>" +"'s Luggage<br><br>"+ '<div>'+'<div>'+ "Phone Number: "+data.phone+"<div>";

  const infowindow = new google.maps.InfoWindow({
  	content: contentString,
  })

    marker.addListener("click", () => {
      infowindow.open(map, marker);
  });
}

function sign_out(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Logged Out successfully!");
      window.localStorage.removeItem("email");
      window.alert("Logged out!");
      window.location.replace("login.html");
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

}
