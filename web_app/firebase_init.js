var firebaseConfig = {
      apiKey: "AIzaSyA7SRdy_kMpJPXEADS6if1qDlu6KoDLWQs",
      authDomain: "tracking-cd40e.firebaseapp.com",
      databaseURL: "https://tracking-cd40e.firebaseio.com",
      projectId: "tracking-cd40e",
      storageBucket: "tracking-cd40e.appspot.com",
      messagingSenderId: "74884978474",
      appId: "1:74884978474:web:c5c12fe74dfff40a243053",
      measurementId: "G-LM531XW5JY"
      };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var name, phone, uid, email, latitude, longitude;