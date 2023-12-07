//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

let jsonData;
let validKeys;

const postItNum = [...Array(3).keys()].map(i => i + 1);  // courtsey of google bard
function permutate() {
    for (let i = 0; i < postItNum.length; ++i) {
        let j = Math.floor(Math.random() * (postItNum.length - i) + i);
        [postItNum[i], postItNum[j]] = [postItNum[j], postItNum[i]];
    }
}

async function getResponses() {
    let response = await fetch('./js/responses.json');
    jsonData = await response.json();
    
    // pick out keys that have not been read
    validKeys = Object.keys(jsonData);

    // make corkboard clickable ONLY if json responses are fetched
    // corkboard shuffle implementaion
    $("#shuffle-button").click(function() {
        // if the starting speech bubble is still there, remove it
        console.log($('#shuffle-button-pop-up'));
        $('#shuffle-button-pop-up').hide();
        // clear out the old post-it data
        $('#corkboard .post-it').remove();
        // randomize text selection from json
        let pick = Math.floor(Math.random() * validKeys.length);
        let text = jsonData[validKeys[pick]].text;  // is a list
        // remove key from valid keys
        validKeys.splice(pick, 1);
        // replenish valid keys
        if (validKeys.length == 0) {
            validKeys = Object.keys(jsonData);
        }
        console.log(text);
        // shuffle post-it backgrounds
        permutate();
        // create div with with fetched text and append to corkboard
        for (let i = 0; i < text.length; ++i) {
            let div = $("<div>", {
                class: `post-it post-it-loc${i+1} post-it-img${postItNum[i]}`,
                text: text[i],
            });
            $("#corkboard").append(div);
        }
    });
}
getResponses();     // call async function
