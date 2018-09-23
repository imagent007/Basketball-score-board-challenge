var awayScore = 0;
var homeScore = 0;

$("#home-1").click(function() {
    homeScore=homeScore+2;
    $("#home-score").text(homeScore);
});

$("#away-1").click(function() {
    awayScore=awayScore+2;
    $("#away-score").text(awayScore);
});