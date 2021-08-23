
//ADD YOUR FIREBASE LINKS HERE  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCYXtjEWx4MLjoukpFx9-_asdoSvm2BWOs",
      authDomain: "kwitterp-37399.firebaseapp.com",
      projectId: "kwitterp-37399",
      storageBucket: "kwitterp-37399.appspot.com",
      messagingSenderId: "40857526708",
      appId: "1:40857526708:web:bd2819a55862ff941e12e1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
