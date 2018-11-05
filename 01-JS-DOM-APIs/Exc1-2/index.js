$(window).on('load', function() {
    setTimeout(function() {
        $(".loader-page").css({
            visibility: "hidden",
            opacity: "0"
        })
    }, 2000);
});

function myFunction() {
    alert("Alert Message!");
}