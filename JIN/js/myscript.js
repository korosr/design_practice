$(function(){
    load_effect();
    $(window).scroll(function (){
        scroll_effect();
    });
});

//ふわっとロード
function load_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.fadein').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}