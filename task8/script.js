$(document).ready(function() {

    $("#animateButton").click(function() {
        $("#box").animate({
            width: "200px",
            height: "200px",
            left: "200px"
        }, 1000);
    });

    $("#resetButton").click(function() {
        $("#box").stop().animate({
            width: "100px",
            height: "100px",
            left: "0px"
        }, 1000);
    });

});
