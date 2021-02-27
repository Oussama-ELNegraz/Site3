$(document).ready(function () {

    // active class in ul bar and scroll To
$(".ul li").click(function () { 
    console.log("clicked")
    $(".ul li").each((e,r) => { 
        $(r).removeClass("active");
    });
    $(this).addClass("active")
    var $dataScrool = $(this).attr("data-scroll");
    $(window).scrollTop($dataScrool);
});
$(window).scroll(function () { 
    var $a2 =  $(".ul li:nth-child(2)").attr("data-scroll") - 300;
$a2 = $a2.toString()
var $a3 =  $(".ul li:nth-child(3)").attr("data-scroll") - 300;
$a3 = $a3.toString()
var $a4 =  $(".ul li:nth-child(4)").attr("data-scroll") - 300;
$a4 = $a4.toString()
var $a5 =  $(".ul li:nth-child(5)").attr("data-scroll") - 100;
$a5 = $a5.toString()


    if ($a2 > $(window).scrollTop()){
            $(".ul li").each((e,r) => { 
        $(r).removeClass("active");
    });
        $(".ul li:nth-child(1)").addClass("active");
    }
    else if ($(window).scrollTop() >= $a2 && $a3 > $(window).scrollTop()) {
            $(".ul li").each((e,r) => { 
        $(r).removeClass("active");
    });
    $(".ul li:nth-child(2)").addClass("active");
    } 
    else if ($(window).scrollTop() >= $a3 && $a4 > $(window).scrollTop()){
            $(".ul li").each((e,r) => { 
        $(r).removeClass("active");
    });
    $(".ul li:nth-child(3)").addClass("active");
    }
    else if ($(window).scrollTop() >= $a4 && $a5 > $(window).scrollTop()){
            $(".ul li").each((e,r) => { 
        $(r).removeClass("active");
    });
    $(".ul li:nth-child(4)").addClass("active");
    }
    else{
            $(".ul li").each((e,r) => { 
        $(r).removeClass("active");
    });
    $(".ul li:nth-child(5)").addClass("active");
    }
});

    // slider show
$arrayImg = ["img/a.jpg","img/b.png","img/c.jpg","img/e.png"];
$current = 0;
$(".span-right").click(function (e) { 
    $current++
    if ($current == $arrayImg.length){
        $current = 0;
    }  
    $("header img").attr("src" , $arrayImg[$current])
});
$(".span-left").click(function (e) { 
    $current--
    if ($current == -1){
        $current =  $arrayImg.length-1;
    }  
    $("header img").attr("src" , $arrayImg[$current])
    
});
setInterval(() => {
    $(".span-right").trigger("click");
}, 5000);


});