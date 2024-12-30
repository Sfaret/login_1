  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth ,googleAuthProvider ,AuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyB1ukq-2QYRRfU4_UskNAAdivWSXKqZbWQ",
    authDomain: "sfaret-login.firebaseapp.com",
    projectId: "sfaret-login",
    storageBucket: "sfaret-login.appspot.com",
    messagingSenderId: "974930877645",
    appId: "1:974930877645:web:a061cf07040ebf4fa19d84",
    measurementId: "G-5EL0XNYEB7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();
  const analytics = getAnalytics(app);

  const user = auth.currentUser;
  function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail)
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").textContent = userProfilePicture;
}

  
      onAuthStateChanged(auth, (user) => {
        if (user) {
       function updateUserProfile(user) {
    updateUserProfile(user);
    const uid = user.uid;
    return uid;

  } "else" 
    alert("Create Account & login");
    
  }
 });