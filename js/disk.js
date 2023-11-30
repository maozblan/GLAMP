//Missed Connection Group Project
//Grace Galan, Maya Crolene, Philip Choe, Ashley Huynh, and Lyssa Li 
//Art101 Fall Quarter 2023 with professor Wes Modes

let p;

let spotifyPlaylists = {
    "grace" : '<iframe id="grace-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2Bex8YgZ74EobhnM1poSVp?utm_source=generator" width="100%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    "maya" : '<iframe id="maya-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1BeBLO59Ji3acFnaFpqbtZ?utm_source=generator" width="100%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    "philip" : '<iframe id="philip-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2TSOAUJOXI1n7HJulpRsaV?utm_source=generator" width="100%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    "ashley" : '<iframe id="ashley-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1OVGqSlxvE0d15aaTy8hGy?utm_source=generator" width="100%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    "lyssa" : '<iframe id="lyssa-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6V4FeoCo1qlBFI9LWyM7dI?utm_source=generator" width="100%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}

$(".disk").click(function() {
    p = $(this).data('p');
    // color palette change
    $('body').attr("class", p);

    // loading page, courtsey of chatGPT
    $("#playlist-loading").fadeIn(250, function() {
        // using callback to make sure fadeIn completes
        console.log("fadein");
        setTimeout(() => {
            $("#playlist-loading").fadeOut(250, function() {console.log("fadeout")});
        }, 550);
    });

    // move the disk
    $(".disk-currently-playing").toggleClass("disk-currently-playing");
    $(this).toggleClass("disk-currently-playing");

    // embed the playlist and add <p> text
    $(".current-playlist").html(spotifyPlaylists[p] + "<p>currently playing: " + p + "'s playlist</p>");
});
