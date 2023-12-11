//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

let p;

$(".disk").click(function() {
    p = $(this).data('p');
    // color palette change
    $('body').attr("class", p);
    // corkboard design change
    if (!($('.current-corkboard-des').hasClass(`${p}-corkboard`))) {
        $('.current-corkboard-des').fadeOut(250).toggleClass('current-corkboard-des');
        $(`.${p}-corkboard`).fadeIn(250).toggleClass('current-corkboard-des');
        console.log($(`.${p}-corkboard`));
    }

    // loading page, courtsey of chatGPT
    $("#playlist-loading").fadeIn(150, function() {
        // using callback to make sure fadeIn completes
        console.log("fadein");
        setTimeout(() => {
            $("#playlist-loading").fadeOut(250, function() {console.log("fadeout")});
        }, 600);
    });

    // move the disk
    $(".disk-currently-playing").toggleClass("disk-currently-playing");
    $(this).toggleClass("disk-currently-playing");

    // remove the starter text (only happens once)
    $("#current-playlist-starter-text").hide();

    // embed the playlist and add <p> text
    $(".current-playlist-text").html("<p>currently playing: " + p + "'s playlist</p>");
    // to hide it within the loading screen
    setTimeout(() => {
        $(".current-playlist-embed").toggleClass("current-playlist-embed").hide();
        $(`#${p}-iframe`).toggleClass("current-playlist-embed").show();
    }, 160);
});

function startPlayback() {
    // Get the iframe element of the embedded player
    const iframe = document.querySelector('iframe');
    console.log(iframe);
  
    // Post a message to the embedded player to start playback
    iframe.contentWindow.postMessage('{"method": "play"}', 'https://open.spotify.com');
}

$('.grace-disk').click(function() {
    console.log("disk clicked");
    startPlayback();
});
