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

// click and drag functionality for stickers
$(document).ready(function() {
    // initializing tracking variable and offset
    let isDragging = false;
    let offsetX, offsetY;

    $("#sticker-love, #sticker-happy, #sticker-sad, #sticker-angry").mousedown(function (e) {
        isDragging = true;
        offsetX = e.clientX - $(this).offset().left;
        offsetY = e.clientY - $(this).offset().top;

        let imageSource = $(this).find("img").attr("src");
        console.log("imageSource = " + imageSource);    // debug (it says that imageSource = undefined, why)

        // make clone of clicked sticker's img
        let clone = $("<div class='sticker'></div>").css({
            "background-image": "url('" + imageSource + "')",
            "background-size": "cover"
        });
        clone.appendTo("#corkboard");   // appends to corkboard (change later when i get back)
                                        // also, doesnt even show up, WHY???

        // set initial cloned sticker position
        clone.offset({
            top: e.clientY - offsetY,
            left: e.clientX - offsetX
        });

        // mouseup event for cloned sticker to prevent further cloning
        clone.mouseup(function () {
            if (isDragging) {
                isDragging = false;
                clone.removeClass("dragging");  // remove dragging class
            }
        });
    }); 
});