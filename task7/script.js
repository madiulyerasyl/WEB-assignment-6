$(document).ready(function() {

    $("#nameInput").on("input", function() {
        let name = $("#nameInput").val();
        $("#nameOutput").text(name);
    });

    $("#emailInput").on("input", function() {
        let email = $("#emailInput").val();
        $("#emailOutput").text(email);
    });

});
