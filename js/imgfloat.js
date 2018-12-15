$(document).ready(function border(){
var boxwidth = $(".postbox").width();
var imgwidth = $('.postimg img').width();
var imgheight = $('.postimg img').height();

if (imgwidth < boxwidth) {
    var marginleft = (boxwidth - imgwidth) / 2;
        $('.postimg img').css('margin-left', marginleft);
        $('.postimg img').css('margin-right', marginleft);
    }

if (imgheight < 350) {
    var vertmargin = (350 - imgheight) / 2;
    $('.postimg img').css('margin-top', vertmargin);
    $('.postimg img').css('margin-bottom', vertmargin);
}

if (boxwidth < 350) {
    $('.postimg img').css('margin-top', 5);
    $('.postimg img').css('margin-bottom', 5);
}

else {
    null;
}

$(window).resize(border);
});