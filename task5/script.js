$(document).ready(function() {

    let itemNumber = 3;

    $("#addButton").click(function() {
        $("#myList").append("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#prependButton").click(function() {
        $("#myList").prepend("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#removeButton").click(function() {
        $("#myList li:last").remove();
    });

});

$(document).ready(function() {

    let itemNumber = 3;

    $("#addButton").click(function() {
        $("#myList").append("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#prependButton").click(function() {
        $("#myList").prepend("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });

    $("#removeButton").click(function() {
        $("#myList li:last").remove();
    });

});
