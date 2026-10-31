$(document).ready(function() {

    $("#slideUpButton").click(function() {
        $("#panel").slideUp(1000);
    });

    $("#slideDownButton").click(function() {
        $("#panel").slideDown(1000);
    });

    $("#slideToggleButton").click(function() {
        $("#panel").slideToggle(1000);
    });

});
