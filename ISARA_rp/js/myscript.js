//よくある質問のアコーディオン
$(function(){
    $("#acmenu dt").click(function(){
        $("#acmenu dt").not(this).removeClass("open");
        //クリックしたdt以外のすべてのopenを取る
        $("#acmenu dt").not(this).next().slideUp("fast");
        //クリックされたdt以外のddを閉じる
        $(this).toggleClass("open");
        //thisにopenクラスを付与
        $(this).next().slideToggle("fast");
        //thisのddを展開、開いていれば閉じる
    });
});

// topに戻る
$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});