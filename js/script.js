// sidenav
var menubtn = document.querySelector(".menuBar"),
    filterbtn = document.querySelector(".filter-btn");

filterbtn .addEventListener("click", function() {
   let filterResult = document.querySelector(".filter-result");
   filterResult.classList.toggle("show-filter-result");
});

$(document).ready(function($) {
    $(".slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4
    });
});

