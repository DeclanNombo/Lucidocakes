// #navbar toggle
$(".togglebutton").click(function(){
     $(".dropdown-menu").slideToggle();
 })

 $(".searchicon").click(function(){
    $(".searcharea").slideToggle();
 })



// images slider
 $(document).ready(function(){
    $(".img-slider").slick({
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:4,
        slidesToScroll:4,
        arrows:false,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToScroll:2,
                    slidesToShow:2
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
});



// maps
function initMap(){
    var mbezi = {lat: -6.729139, lng:39.224545};
 
    var map = new google.maps.Map(
       document.getElementById('map'), {zoom: 4, center: mbezi});
 
       var marker = new google.maps.Marker({position: mbezi, map: map});
 }
 

// form
$(".email").click(function(){
   
    $(this).toggleClass("email2");
})

