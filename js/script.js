$(function () {
    const skillHr = $('.hr');
    $(document).scroll(function () {
        console.log($(document).scrollTop());
        if (($(document).scrollTop() >= 0 && $(document).scrollTop() < 597)) {
            clearHr();
            $(skillHr[0]).css('display', 'block');
        } else if ($(document).scrollTop() >= 597 && $(document).scrollTop() < 1200) {
            clearHr();
            $(skillHr[1]).css('display', 'block');
        } else {

        }
    });
    function clearHr() {
        $(skillHr).removeClass('hr-active');
        $(skillHr).css('display', 'none');
    }
});