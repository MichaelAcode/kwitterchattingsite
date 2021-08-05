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
//YOUR FIREBASE LINKS
var roomname=localStorage.getItem("roomname");
var username=localStorage.getItem("username");
function send(){
      message=document.getElementById("message").value;
    firebase.database().ref(roomname).push({
             name:username,
message:message,
like:0
      });
      document.getElementById("message").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(roomname).child(message_id).update({
		like : updated_likes  
	 });

}