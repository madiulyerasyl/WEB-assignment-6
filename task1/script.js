$(document).ready(function() {

    $("#changeButton").click(function() {

        // Select by ID and change text
        $("#myText").text("Text changed using jQuery!");

        // Select by class and change HTML
        $(".message").html("<b>This text is bold!</b>");

        // Select by tag and change CSS
        $("h3").css("color", "blue");

        // Change background color
        $("#myText").css("background-color", "lightyellow");

    });

});
