$(document).ready(function() {

    $("#startButton").click(function() {

        $("#box").stop(true, true);

        $("#box")
            .animate({ left: "200px" }, 1000)
            .animate({ top: "150px" }, 1000)
            .animate({
                width: "50px",
                height: "50px"
            }, 1000)
            .animate({
                left: "0px",
                top: "0px",
                width: "100px",
                height: "100px"
            }, 1000);

    });

    $("#resetButton").click(function() {
        $("#box").stop(true, true).css({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px"
        });
    });

});
