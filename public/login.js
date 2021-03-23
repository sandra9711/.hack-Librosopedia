/**var firebaseConfig = {
    apiKey: "AIzaSyAZ63jV93s9PJacblbiLnMeo7UcUg1nuu4",
    authDomain: "librosopedia.firebaseapp.com",
    projectId: "librosopedia",
    storageBucket: "librosopedia.appspot.com",
    messagingSenderId: "956548396826",
    appId: "1:956548396826:web:49a24f9f495a41ce111ea3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);**/

  //const auth = firebase.auth();
  document.addEventListener("DOMContentLoaded",event=>{
    const app=firebase.app();
    console.log(app)
  });
  function signup(){
    var email = document.getElementById("eid");
    var pasw = document.getElementById("psw");
    firebase.auth().createUserWithEmailAndPassword(email, pasw)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("Yay Signed Up");
    location.replace("file:///c:/Users/LENOVO/Desktop/rp/py/web/web dev/.hack proj/public/library.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    

  }
  
  
firebase.auth.Auth.Persistence.NONE;
  
  function login(){
      var email = document.getElementById("reqe").value;
      var pasw = document.getElementById("reqp").value;
      
      const promise = firebase.auth.signInWithEmailAndPassword(email, pasw).then((success) =>{
        
        var user = userCredential.user;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            
		alert("Logged In");
        location.replace("file:///c:/Users/LENOVO/Desktop/rp/py/web/web dev/.hack proj/public/library.html");
    });
		promise.catch(e => alert(e.message));
		
		alert("Signed In");

  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });