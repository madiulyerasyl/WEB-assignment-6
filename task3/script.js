$(document).ready(function() {

    $("#fadeInButton").click(function() {
        $("#myImage").fadeIn(1000);
    });

    $("#fadeOutButton").click(function() {
        $("#myImage").fadeOut(1000);
    });

    $("#fadeToggleButton").click(function() {
        $("#myImage").fadeToggle(1000);
    });

});
