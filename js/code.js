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

// click and drag functionality for sticker
/*$(document).ready(function() {
    // initializing tracking variable and offset
    let isDragging = false;
    let offsetX, offsetY;

    // mousedown event for sticker
    $(".sticker").mousedown(function (idk) {
        isDragging = true;
        offsetX = idk.clientX - $(this).offset().left;
        offsetY = idk.clientY - $(this).offset().top;
        $(this).css("z-index", "400");
    });

    // mouseup event for corkboard
    $(document).mouseup(function () {
        if (isDragging) {
            isDragging = false;
            $(".sticker").css("z-index", "401");
        }
    });

    // mousemove event to drag sticker
    $(document).mousemove(function (e) {
        if (isDragging) {
            $(".sticker.dragging").offset({
                top: e.clientY - offsetY,
                left: e.clientX - offsetX
            });
        }
    });

    // mouseup event for sticker
    $(".sticker").mouseup(function () {
        if (isDragging) {
            isDragging = false;
            $(this).removeClass("dragging");
        }
    });

    // mouseup event for corkboard
    $(document).mouseup(function () {
        if (isDragging) {
            isDragging = false;
            $(".sticker").removeClass("dragging");
        }
    });

    // click event for heart sticker
    $("#sticker1").click(function () {
        if (!isDragging) {
            // Create a clone of the heart sticker
            let clone = $("<div class='sticker'></div>").css({
                "background-image": "url('img/stickersheet/love.png')",
                "background-size": "cover"
            });
            clone.appendTo("#sticker-sheet");
        }
    });
});*/