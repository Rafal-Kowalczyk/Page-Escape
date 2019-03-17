$(function () {
    // scrollowanie strony
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2500);
    });

    // ukrywanie menu do hamburgera po wciśięciu linka
    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    // powrót do góry strony
    var $window = $(window);
    var $slideUp = $('#slideUp');
    var endZone = $('#services').offset().top;

    $window.on('scroll', function () {

        if (endZone < $window.scrollTop()) {
            $slideUp.animate({
                'right': '5%'
            }, 500);
        } else {
            $slideUp.stop(true).animate({
                'right': '-360px'
            }, 100);
        }

    });

});