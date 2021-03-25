
  document.addEventListener("DOMContentLoaded",event=>{
    const app=firebase.app();
    console.log(app)
  });
  function signup(){
    alert("Signing Up");
    const email = String(document.getElementById('eid').value);
    const pasw = String(document.getElementById('psw').value);
    firebase.auth().createUserWithEmailAndPassword(email, pasw)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("Signed Up");
    location.replace("./library.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    

  }
function data_fn(){
    var d_1=document.getElementById("fid_txt1");
    var d_2=document.getElementById("fid_txt2");
    var d_3=document.getElementById("fid_txt3");
    var d_5=document.getElementById("fid_txt5");
   if(d_1.value==""){
        alert("Contributor Name should be filled.");
    }
    if(d_2.value==""){
        alert("Book Name and category should be filled.");

    }
    if(d_3.value==""){
        alert("Contact cannot be empty.");
    }
    
    //writeUserData(d_1, d_2, d_3,d_5);
    var fref=firebase.database().ref('book data');
    if(fref==null){
      console.log("Error")
    }else{
      console.log("not null")
    }
    fref.set({
      name: d_1,
      book:d_2,
      contact:d_3,
      price: d_5
    });
    let bRef = this.database.ref('users/' + d_2);
    bRef.child('cond/'+d_1).set({'contact': value.d_1, 'price': value.d_5});
    //fref.ref("contributor").child("price").set(d_5.value);
    alert("Thank You.Submission succesful.Our team will review the data.")
    document.getElementById('form').reset();
}
function writeUserData(d_1, d_2, d_3,d_5) {
  firebase.database().ref('books/' + d_2).set({
    Name: d_1.value,
    book : d_2.value,
    contact : d_3.value,
    price : d_5.value
  });
  alert("Thank You.Submission succesful.Our team will review the data.")
  document.getElementById('form').reset();
}

  function google_login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      console.log(user)
      if(user){
        alert("Logged In");
        location.replace("./library.html");
      }
    })
    .catch(console.log)
  }
  function logout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert("Logged Out");
      location.replace("./index.html")
    }).catch((error) => {
      // An error happened.
    });
  }
  function login(){
      const email = String(document.getElementById('reqe').value);
      const pasw = String(document.getElementById('reqp').value);
      
      const promise = firebase.auth.signInWithEmailAndPassword(email, pasw).then((success) =>{
        
        var user = userCredential.user;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            
		alert("Logged In");
        location.replace("./library.html");
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