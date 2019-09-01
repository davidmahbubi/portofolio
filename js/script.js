$(function () {

    const skillHr = $('.hr');
    const navLink = $('.nav-link');

    $(document).scroll(function () {

        let nowScrollTop = $(document).scrollTop();

        if (nowScrollTop >= 0 && nowScrollTop < 597) { // Condition in home
            clearHr();
            clearActiveMenu();
            setActive(0, 0);
        } else if (nowScrollTop >= 592 && nowScrollTop < 1200) { // Condition in skill
            clearHr();
            clearActiveMenu();
            setActive(1, 1);
        } else if (nowScrollTop >= 1200 && nowScrollTop < 1700) {
            clearHr();
            clearActiveMenu();
            setActive(2, 2);
        } else if (nowScrollTop >= 1700) {
            clearHr();
            clearActiveMenu();
            setActive(3, 3);
        }
    });

    function setActive(hrIndex, menuIndex) {
        $(skillHr[hrIndex]).css('display', 'block');
        $(navLink[menuIndex]).addClass('dv-color-pri');
    }

    function clearHr() {
        $(skillHr).removeClass('hr-active');
        $(skillHr).css('display', 'none');
    }

    function clearActiveMenu() {
        $('.nav-link').removeClass('dv-color-pri');
    }

});