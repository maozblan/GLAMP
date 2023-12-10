// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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
    3: [
        "All these years I was just idly your friend, helping you look for the one. Yet sometimes I wonder if it's selfish to want you all to myself even when I know I cannot even give you the type of love that you look for."
    ],
    4 : [
        "Three years ago I had a crush on my across the street neighbor. I observed him for a few weeks before we finally met. I was considering putting my number on a piece of paper and leaving it on his windshield, but luckily the universe had other plans. I ended up needing his help with a rogue homeless man who was harassing my apartment building at the time.",
        "We ended up dating and moved in together after 4 months. We are still together to this day 3 and a half years later."
    ],
    5 : [
        "i fell in love with you while reading your favorite book. i think of you every time i see a magnificent tree, a tiny ceramic house, or a seahorse. you set a precedent i will never forget and you only loved me up close for 3 months."
    ],
    6 : [
        "I got a crush on my friend in HS who was already in a relationship of 2 years. In our senior year, I slipped an anonymous love letter in his locker wishing him and his GF the best of luck in the future. He thought the letter was a prank."
    ],
    7 : [
        "i once had a crush on one of my best friends in high school and im so glad i never told them. they turned out to be so controlling and passive agressive and im glad we dont talk anymore"
    ],
    8 : [
        "when i was 17 i worked at a summer camp with a girl a year older than me and as soon as i saw her i was crazy into her. a few days in, she asked if i wanted to hangout after curfew and said 'bring chapstick.' we met up behind the water tower after curfew and i was so excited when she kissed me i almost had an asthma attack"
    ],
    9 : [
        "when i was 13 i had a crush on an older boy at surf camp and never told him even though i had originally planned to. In lesbian retrospect, i was madly in love with his girlfriend."
    ],
    10 : [
        "There's this person that I really care about, but I know they don't see me in the same way. We have a beautiful friendship and I don't want to ruin that. This person means a lot to me, and I want them to continue being a part of my life, even if only as a friend. Still, I can't control my feelings. It hurts to have to keep them to myself, but that is my burden to bear."
    ],
    11 : [
        "i had a crush on one of my friends in middle school but he didnt feel the same but at the end we still remain friends to this day."
    ],
    12 : [
        "I used to have a crush on this girl in 6th grade and was always too scared to make a move because I wasn't sure if she was into me or just being super friendly. We ended up going to the same high school and in 9th grade I told her about the crush I had on her in 6th grade. She told me she liked me back and that I should've said something.",
        "Nothing came much of that because I was scared to be in my first wlw relationship but she now also goes to UCSC! She has a partner now and I am also in a relationship too, however, I still wonder what could have happened if I just said something earlier."
    ],
    13 : [
        "I've got a secret love! How I never realized after all this time I don't know. But they were always there for me. But I was never there for them. I realized I should love and cherish them. Because they are me! I was so busy looking for that special someone to make me complete, that I never bothered to find myself. Love ya self <3"
    ],
    14 : [
        "i had a situationship with a guy for 6 months and then figured out i was a lesbian"
    ],
    15 : [
        "There's a girl I've known for a few years now and she's become one of my best friends. I don't know when I started liking her as anything more but I do. I can't even think of a way I couldn't. She's just amazing and I love having her in my life even if we just stay friends. I'm just happy to get to know her."
    ],
    16 : [
        "I'm breaking the rules a bit because I have a partner, but oh my gosh I am so incredibly happy with my partner. They are so kind and thoughtful and we make adventures out of the mundane things like grocery runs or event urgent care visits."
    ],
    17 : [
        "I find comfort in knowing I wake up next to them in the morning."
    ],
    18 : [
        "I've been seeing this guy since June, I want to ask him if we could make things official but I'm terrified he'd say no bc when we started things out we both agreed we weren't looking for anything serious, we were both planning on leaving the area."
    ],
    19 : [
        "It's so weird but I never thought I would like this guy until my friend mentioned that he was cute as a joke. I found out my type was smart guys cus of him but I CAN'T GET OVER HIMMM its been a whole year and I thought I'd be done by now 😭 I never was the type to have a crush at all or for long.. I feel like he likes me too bc of glances/stares at me and stuff", 
        "but we have never talked to eachother and idk if he's staring at me bc he has seen me staring or he likes me 💀 AM I BEING DELUSIONAL But i don't wanna assume and I don't know if I like him fr or I just don't know him well enough.. But he's still really cute! I can't even escape him because we have so many mutual classes and friends 😭😭", 
        "I should confess right to see my feelings are true or not and so I can move on but I don't have that courage maybe end of senior year so I never have to see him again 🥰"
    ],
    20 : [
        "As much as I want to hate my ex I can't. I really do have love for him even though he broke my heart. It's been 8 months since we officially broke up but four since we last spoke. I'm not in love with him anymore, my heart doesn't drop when I hear his name but it still makes me sad that I'll never speak to him again the way we used to talk. Though I'm not in love anymore", 
        "I still think about him mostly everyday. There was no closure I'm still not sure why he left me if the day before he told me he'd love me forever and just for him to be hugging another girl and taking her to prom a week later broke my heart. I wonder if he still thinks of me and if he ever regrets what he did or even if he still loves me the way I do even if he's not in love with me anymore", 
        "I would like to still know what he feels towards me. I love him he has a special place in my heart. Like that one song says “I guess I'll just miss her, even if she isn't even really gone.”"
    ],
    21 : [
        "I took the best thing that ever happened to me for granted… I wish I could have approached the situation from a more fulfilled place, entering the relationship and existing in a state of, like, emotional famine ended up just causing too many issues. It made me not the person they fell in love with :( And I get that things ending are a sign for me and part of my journey of finding self worth,", 
        "but I am genuinely so heartbroken about them. It's been so long, too… I still cry about them all the time. They were a wonderful partner and friend and I am so happy I had the time I had with them. Overall, I know it's okay and it's going to be okay for us individually. I just miss them and I know this grief will be a part of me for a long time... If I could talk to them one more time I would say this:", 
        "\"I love you, and that's it. I'm sorry for complicating things endlessly, I hope someday I'll see you around and we could catch up as friends. I promise I will let my love for you stay with me as a reminder to do better and be better for myself and for others. Thank you for everything.\""
    ],
    22 : [
        "I am still in love with my guy best friend but I never told him and now we live far away from each other"
    ],
    23 : [
        "Regretfully, I held my tongue the other night. \nI should've told you \nWhat I thought about your smile. \nWords failed me then \nBut I'll tell you now. \nWhen I stare into your eyes \nGlowing like the stars in the night sky \nMy weak heart skips a beat. \nThe room suddenly turns warm \nYour smile is the softest feeling I've encountered \nThe world around me becomes \nSimpler. \nLess frightening", 
        "\nYour smile is familiar \nWarm and sweet \nBewitching and curious. \n And yet, every time my gaze lands on yours \nIt fills me with peace \nJust as electrifying as the first."
    ],
    24 : [
        "About 3 years ago, I met this person online and we connected by playing minecraft at first. After around a year, I realized that one day I was just constantly thinking about them and wanting to talk to them again. Due to past experiences, that whole experience was very difficult for me and even if they did reciprocate feelings, I don't think it would have gone very well. Luckily, I worked it out and",
        "we are still friends to this day :)"
    ],
    25 : [
        "I wish I had a friend group instead of multiple friends that don't know each other, it would be awesome if I could take all my friends in a room and we all hung out but I don’t know how that would end up lol"
    ],
    26 : [
        "I juz got into this studio for my internship this summer, and I met her there as a colleague. We once had a deep chat when we were waiting outside of our studio where there were an event going on. I juz felt like getting closer to her and watching her side face. Not until then I came to realize that I was also into girls. 🥺"
    ],
    27 : [
        "it'll be our 1 year breakup anniversary in a couple weeks, but i still think about you. i wish we could go back to how we used to be. i'm constantly daydreaming about falling asleep in your arms and tracing your face with my fingers. i want to kiss your eyes once more. if only it was different… i hate that i can never go back to you."
    ],
    28 : [
        "i am completely in love with my girlfriend before her i never thought i was capable of loving anyone nor did i believe i was worthy of being loved"
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

export function getResponseData() {
    get(dataRef)
    .then(snapshot => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
    } else {
        console.log('No data found');
    }
    });
}
