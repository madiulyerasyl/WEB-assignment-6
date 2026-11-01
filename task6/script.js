$(document).ready(function() {

    $("#imageButton").click(function() {
        $("#myImage").attr(
            "src",
            "https://placehold.co/300x200/90EE90/000000?text=Image+2"
        );
    });

    $("#linkButton").click(function() {
        $("#myLink").attr("href", "https://www.wikipedia.org");
        $("#myLink").text("Visit Wikipedia");
    });

});
