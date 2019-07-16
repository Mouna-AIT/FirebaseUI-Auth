   // Your web app's Firebase configuration
   var firebaseConfig = {
       apiKey: "AIzaSyCSlUrEzG6UyqNwOY1rT4gac5D_LXfRq34",
       authDomain: "gift-app-3a099.firebaseapp.com",
       databaseURL: "https://gift-app-3a099.firebaseio.com",
       projectId: "gift-app-3a099",
       storageBucket: "",
       messagingSenderId: "549853130134",
       appId: "1:549853130134:web:22ccb0856801f2a2"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   // FirebaseUI config.
   var uiConfig = {
       signInSuccessUrl: '<url-to-redirect-to-on-success>',
       signInOptions: [
           // Leave the lines as is for the providers you want to offer your users.
           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
           firebase.auth.EmailAuthProvider.PROVIDER_ID,
       ],
       // tosUrl and privacyPolicyUrl accept either url string or a callback
       // function.
       // Terms of service url/callback.
       tosUrl: '<your-tos-url>',

   };

   // Initialize the FirebaseUI Widget using Firebase.
   var ui = new firebaseui.auth.AuthUI(firebase.auth());
   // The start method will wait until the DOM is loaded.
   ui.start('#firebaseui-auth-container', uiConfig);