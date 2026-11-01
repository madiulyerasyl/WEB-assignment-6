$(document).ready(function() {

    $("#animateButton").click(function() {

        $("#box").stop(true, true).animate({
            width: "200px",
            height: "200px",
            left: "200px",
            top: "100px",
            opacity: 0.3
        }, 1500);

    });

    $("#resetButton").click(function() {

        $("#box").stop(true, true).animate({
            width: "100px",
            height: "100px",
            left: "0px",
            top: "0px",
            opacity: 1
        }, 1500);

    });

});
