$(document).ready(function (){
    $(".card").hover(function (){
        $(this).css({"transform": "scale(0.95, 1.05)",
        "box-shadow": "5px 0px 25px 0px rgba(51, 1, 80, 0.68)",
        "transition": "0.5s"});
    }, function (){
        $(this).css({"transform":"initial",
        "box-shadow": "5px 5px 25px 1px rgba(206, 206, 206, 0.68)",
        "transition": "0.5s"})
    });
});

