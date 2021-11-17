
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCoAMt5jLCb69jDumsHlE9y6_HiVU5MG6k",
      authDomain: "kwitter-71b38.firebaseapp.com",
      databaseURL: "https://kwitter-71b38-default-rtdb.firebaseio.com",
      projectId: "kwitter-71b38",
      storageBucket: "kwitter-71b38.appspot.com",
      messagingSenderId: "715860074143",
      appId: "1:715860074143:web:bf7a1eca38da8de64f8caa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "Kwitter.html"
}