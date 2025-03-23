$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav-links").toggleClass("active");
        $(".hamburger").toggleClass("active");
    });
});
