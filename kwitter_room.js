var firebaseConfig = {
      apiKey: "AIzaSyCMtM5S0A1tN-y2yagrK-zZHDSNUGtK59c",
      authDomain: "kwitter-94743.firebaseapp.com",
      databaseURL: "https://kwitter-94743-default-rtdb.firebaseio.com",
      projectId: "kwitter-94743",
      storageBucket: "kwitter-94743.appspot.com",
      messagingSenderId: "365506476609",
      appId: "1:365506476609:web:3d6f9f4f426914af5be4c0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var u_name=localStorage.getItem("username");
document.getElementById("welcomemsg").innerHTML="Hey, welcome "+u_name+"!";
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='roomname' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}
getData();
function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}
function addroom(){
      var roomname=document.getElementById("roomname").value;
      localStorage.setItem("roomname",roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose : "adding room name"
          });
      window.location="kwitter_page.html"
}
function redirect(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}