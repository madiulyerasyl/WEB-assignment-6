$(document).ready(function() {

    $(".accordion-header").click(function() {

        let content = $(this).next(".accordion-content");

        $(".accordion-content").not(content).slideUp(500);

        content.slideToggle(500);

    });

});
