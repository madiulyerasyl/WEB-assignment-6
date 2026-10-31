$(document).ready(function() {

    $("#hideButton").click(function() {
        $("#myParagraph").hide();
    });

    $("#showButton").click(function() {
        $("#myParagraph").show();
    });

    $("#toggleButton").click(function() {
        $("#myParagraph").toggle();
    });

});
