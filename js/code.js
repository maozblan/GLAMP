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

// DOESNT WORK
// click and drag functionality for stickers
/* document.addEventListener('DOMContentLoaded', () => {
    function setupDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;

        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;

                element.style.left = `${x}px`;
                element.style.top = `${y}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    // Apply the setupDraggable function to each sticker element
    const stickerLove = document.getElementById('sticker-love');
    const stickerHappy = document.getElementById('sticker-happy');
    const stickerSad = document.getElementById('sticker-sad');
    const stickerAngry = document.getElementById('sticker-angry');

    setupDraggable(stickerLove);
    setupDraggable(stickerHappy);
    setupDraggable(stickerSad);
    setupDraggable(stickerAngry);
}); */