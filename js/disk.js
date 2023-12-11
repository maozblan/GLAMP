//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

let p;
let spotifyPlaylists = {
    "grace" : '2Bex8YgZ74EobhnM1poSVp',
    "maya" : '1BeBLO59Ji3acFnaFpqbtZ',
    "philip" : '2TSOAUJOXI1n7HJulpRsaV',
    "ashley" : '1OVGqSlxvE0d15aaTy8hGy',
    "lyssa" : '6V4FeoCo1qlBFI9LWyM7dI'
}

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

    // embed the playlist and add <p> text
    $(".current-playlist").html(`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${spotifyPlaylists[p]}?utm_source=generator" width="100%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`);
    $(".current-playlist-text").html("<p>currently selected: " + p + "'s playlist</p>");
});
