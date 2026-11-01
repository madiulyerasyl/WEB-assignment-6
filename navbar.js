$(document).ready(function() {

    let isHome = window.location.pathname.endsWith("index.html")
        && !window.location.pathname.includes("/task");

    let prefix = isHome ? "" : "../";

    let navbar = '<nav style="padding:15px; background:#333;">';

    navbar += '<a href="' + prefix + 'index.html" style="color:white; margin:10px;">Task 0</a>';

    for (let i = 1; i <= 11; i++) {
        navbar += '<a href="' + prefix + 'task' + i + '/index.html" style="color:white; margin:10px;">Task ' + i + '</a>';
    }

    navbar += '</nav>';

    $("body").prepend(navbar);

});
