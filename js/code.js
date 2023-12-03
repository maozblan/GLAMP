//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

// just making the title page disappear when clicked
$("#title-page").click(function() {
    $("#title-page").fadeOut(3000);
});

// hiding all the other corkboard pages
$(document).ready(function() {
    $('.corkboard-des').hide();
    $('.current-corkboard-des').show();
});

// 
// initializing variables to track if something's being dragged, and offset too
let currentlyDragging = false;
let offsetX, offsetY;








// deprecated code (we dont need this functionality)
// functionality: click and drag imgs
/*
// gets bus pass img from html by its id
const bus_pass = document.getElementById('bus-pass');

// adds event listener on bus_pass when mouse is pressed down
bus_pass.addEventListener('mousedown', (e) => {
    // sets dragging state to true
    currentlyDragging = true;

    // calculates offset of mouse from top left corner of img
    offsetX = e.clientX - bus_pass.getBoundingClientRect().left;
    offsetY = e.clientY - bus_pass.getBoundingClientRect().top;
});

// adds event listener for dragging movement when mouse is moved
document.addEventListener('mousemove', (e) => {
    // check to see if img is currently being dragged
    if(currentlyDragging) {
        // calculates new img position based on mouse position
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // changed img position to calcualted img position from above
        bus_pass.style.left = `${x}px`;
        bus_pass.style.top = `${y}px`;
    }
});

// adds event listener to stop moving/dragging img when mouse is released
document.addEventListener('mouseup', () => {
    // sets dragging state to false when mouse is released
    currentlyDragging = false;
})
*/