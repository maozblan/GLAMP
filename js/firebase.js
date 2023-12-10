// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZS_FIz7ihmWL8PN_iqqKuqRxI2TFRwA",
  authDomain: "art101snackshack.firebaseapp.com",
  projectId: "art101snackshack",
  storageBucket: "art101snackshack.appspot.com",
  messagingSenderId: "1070603752523",
  appId: "1:1070603752523:web:7f1050143545f4f366a9ce",
  measurementId: "G-8VFEHRS7ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Using Realtime Database as data storage
const db = getDatabase(app);
const dataRef = ref(db, "responses/toDisplay");

const data = {
    1 : [
        "\"incoming goodbye\ni used to worry and wonder a lot about how i'm going to remember you, but for now i've decided that i will just enjoy the time i have with you now. i don't know how it will be in the future, but i wish i could connect with the you from now again someday\""
    ],
    2 : [
        "There was a girl that I had a crush on in junior high. She was super shy, but I could also tell she was really smart. I would put notes in her locker, but she would never talk to me. Then I moved away. Years later in high school I was visiting old Jr high friends and went to a party and there was a group of people surrounding this pretty girl who was talking animatedly.",
        "It was her! She had finally blossomed into a vivacious young woman! She saw me and called my name! But now it was my turn to be super shy and I just mumbled something and then avoided her for the rest of the party. Ever since then I've been wondering how she was, but she completely dropped off the map and no one knew where she was.", 
        "Where did she go? What kind of person did she grow up into?"
    ],
    3 : [
        "Three years ago I had a crush on my across the street neighbor. I observed him for a few weeks before we finally met. I was considering putting my number on a piece of paper and leaving it on his windshield, but luckily the universe had other plans. I ended up needing his help with a rogue homeless man who was harassing my apartment building at the time.",
        "We ended up dating and moved in together after 4 months. We are still together to this day 3 and a half years later."
    ]
};

// store data into databse
set(dataRef, data)
    .then(() => {
        console.log("Data stored successfully!");
    })
    .catch((error) => {
        console.error("Error storing data:", error);
    });
