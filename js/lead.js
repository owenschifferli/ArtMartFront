$(document).ready(function height(){
    var viewheight = $(window).height();
    var leadheight = $('.lead').height();
    var imgheight = $('section div ul li img').height()
    leadheight = viewheight * 0.3;

    if (leadheight < imgheight) {
        leadheight = imgheight + 40;
    }

    else {
        null;
    }

    $('.lead').css('height', leadheight);
    console.log("leadheight", leadheight);
    console.log("viewheight", viewheight);

});

