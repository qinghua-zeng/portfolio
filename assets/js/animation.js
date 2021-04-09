

$(function () {

    x = 620;//设置触发动画的位置，数值越大触发位置越低

    //鼠标滚动触发
    $(window).on('scroll', function () {

        //$(".current").text($(window).scrollTop());//实时显示 页面位置
        //fadeInToRight
        $('.fadeInToRight').each(function (index) {
            if ($(this).offset().top - $(window).scrollTop() <= x) {

                $(this).animate({
                    left: 0,
                    opacity: 1
                }, 1000);
            }
        })
        //fadeInToLeft
        $('.fadeInToLeft').each(function (index) {
            if ($(this).offset().top - $(window).scrollTop() <= x) {

                $(this).animate({
                    left: 0,
                    opacity: 1
                }, 1000);
            }
        })


        //fadeIn
        $('.fadeIn').each(function (index) {
            if ($(this).offset().top - $(window).scrollTop() <= x) {
                $(this).animate({
                    left: 0,
                    opacity: 1
                }, 1000);
            }
        })

        //slideUp
        $('.slideUp').each(function (index) {
            if ($(this).offset().top - $(window).scrollTop() <= x) {
                $(this).animate({
                    top: 0,
                    left: 0,
                    opacity: 1
                }, 1000);
            }
        })

        //slideDown
        $('.slideDown').each(function (index) {
            if ($(this).offset().top - $(window).scrollTop() <= x) {
                //往右边滑动
                //alert(this);
                $(this).animate({
                    top: 0,
                    left: 0,
                    opacity: 1
                }, 1000);
            }
        })

    });
});