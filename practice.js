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
//ADD YOUR FIREBASE LINKS
function addUser() {
     user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
     }