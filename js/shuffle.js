//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

let jsonData;
let validKeys;
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
        let text = jsonData[validKeys[pick]].text;
        // remove key from valid keys
        validKeys.splice(pick, 1);
        // replenish valid keys
        if (validKeys.length == 0) {
            validKeys = Object.keys(jsonData);
        }
        console.log(text);
        // create div with with fetched text and append to corkboard
        let div = $("<div>", {
            class: "post-it",
            text: text
        });
        $("#corkboard").append(div);
    });
}
getResponses();     // call async function
