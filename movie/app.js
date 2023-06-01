$('#movie-form').on('submit', function(e){
    e.preventDefault()
    const movieTitle = $('#title').val()
    const movieRating = $('#rating').val()
    $('#movie-collection').append(`<li>You gave the movie ${movieTitle} a rating of ${movieRating}  <button class="remove">X</b></li>`)
})
$('#movie-collection').on('click', '.remove', function(){
    $(this).parent().remove();
});