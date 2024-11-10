$(document).ready(function() {
    $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 50) {
            $('.circle').css('transform', 'translate(-50%, -50%) scale(8)');
        } else {
            $('.circle').css('transform', 'translate(-50%, -50%) scale(1)');
        }
    });
});
