$(document).ready(function() {
    $("#submitMovie").click(function() {
        $("#openModal").hide(function(){
            clean();
        });
       return registerMovie();
    });
});
function registerMovie() {

    var rating = Math.random() * (5 - 1) + 1;
    var ratingRounded = Math.round(rating * 10) / 10;
    var date = $("#RelasedModal").val();
    if ($("#RelasedModal").val() == "") {
        date = new Date();
    }

    var movie = {
        "title": $("#TitleModal").val(),
        "year": date.getFullYear(),
        "released": date.toString(),
        "genre": $("#CategoryModal").val(),
        "director": $("#DirectorModal").val(),
        "actors": $("#ActorsModal").val(),
        "plot": $("#PlotModal").val(),
        "poster": $("#PosterModal").val(),
        "rating": ratingRounded,
    };

    $.ajax({
        url: '/api/movies',
        type: 'POST',
        dataType: 'json',
        data: movie,
    });
    return false;
}