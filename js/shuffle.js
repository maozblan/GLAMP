//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

// fetch the form responses currently stored in reponses.json
let jsonData;
$(document).ready(function() {
    // $.ajax({
    //     url: 'responses.json',   // path to json file
    //     dataType: 'json',
    //     success: function(data) {
    //     jsonData = data;
    //     console.log(jsonData);
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //     console.error('Error loading JSON file:', textStatus, errorThrown);
    //     }
    // });
});
// ^^ just says the file can'e be found :(

// literally writing in the json here for now :(
jsonData = {
    "1" : {
        "text" : "\"incoming goodbye\ni used to worry and wonder a lot about how i'm going to remember you, but for now i've decided that i will just enjoy the time i have with you now. i don't know how it will be in the future, but i wish i could connect with the you from now again someday\""
    },
    "2" : {
        "text" : "There was a girl that I had a crush on in junior high. She was super shy, but I could also tell she was really smart. I would put notes in her locker, but she would never talk to me. Then I moved away. Years later in high school I was visiting old Jr high friends and went to a party and there was a group of people surrounding this pretty girl who was talking animatedly. It was her! She had finally blossomed into a vivacious young woman! She saw me and called my name! But now it was my turn to be super shy and I just mumbled something and then avoided her for the rest of the party. Ever since then I've been wondering how she was, but she completely dropped off the map and no one knew where she was. Where did she go? What kind of person did she grow up into?"
    }, 
    "3" : {
        "text" : "All these years I was just idly your friend, helping you look for the one. Yet sometimes I wonder if it's selfish to want you all to myself even when I know I cannot even give you the type of love that you look for."
    },
    "4" : {
        "text" : "Three years ago I had a crush on my across the street neighbor. I observed him for a few weeks before we finally met. I was considering putting my number on a piece of paper and leaving it on his windshield, but luckily the universe had other plans. I ended up needing his help with a rogue homeless man who was harassing my apartment building at the time. We ended up dating and moved in together after 4 months. We are still together to this day 3 and a half years later."
    },
    "5" : {
        "text" : "i fell in love with you while reading your favorite book. i think of you every time i see a magnificent tree, a tiny ceramic house, or a seahorse. you set a precedent i will never forget and you only loved me up close for 3 months."
    }
};

// corkboard shuffle implementaion
$("#shuffle-button").click(function() {
    // clear out the old post-it data
    $('#corkboard .post-it').remove();
    // randomize text selection from json
    let keys = Object.keys(jsonData);
    let pick = Math.floor(Math.random() * keys.length);
    let text = jsonData[keys[pick]].text;
    console.log(text);
    // create div with with fetched text and append to corkboard
    let div = $("<div>", {
        class: "post-it",
        text: text
    });
    $("#corkboard").append(div);
});
