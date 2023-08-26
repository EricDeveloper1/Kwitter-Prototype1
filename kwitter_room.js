
const firebaseConfig = {
      apiKey: "AIzaSyBl_-d4K1MhsKAXmuaVhhEI-kVmUXWJUeY",
      authDomain: "kwitter-87298.firebaseapp.com",
      projectId: "kwitter-87298",
      storageBucket: "kwitter-87298.appspot.com",
      messagingSenderId: "303560940760",
      appId: "1:303560940760:web:76ee182bde23fc1baa0bad"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
