$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
})
$('article').find('img').addClass('image-center');
$('p').last().remove();
const rdm = (Math.floor(Math.random() * 101));
$('h1').css('font-size', `${rdm}.px`);
$('ol').append('<li>Lists come to an end</li>');
$('aside').empty().append('<p>We would like to formally appologize for there previously being a list here.</p>');
$('input').on('change', function(){
    let rValue = $(".form-control-R").val();
let bValue = $(".form-control-B").val();
let gValue = $(".form-control-G").val();
$('body').css('background-color', `rgb(${rValue},${gValue},${bValue})`);
})
$('img').on('click', function(){
    (this).remove()
})
// let rValue = $(".form-control-R").val();
// let bValue = $(".form-control-B").val();
// let gValue = $(".form-control-G").val();
// $('body').css('background-color', `rgb(${rValue},${gValue},${bValue})`);