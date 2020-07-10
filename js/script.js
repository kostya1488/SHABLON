// -------------------------------------------------------- fixed menu --------------------------------------------
window.onscroll = function() { myFunction() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
// ======================================================== / fixed menu ==========================================
// -------------------------------------------------------- scroll to section -------------------------------------
$(function() {

    $('.some_link').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 300);
        e.preventDefault();
    });
});

// ======================================================== / scroll to section ===================================
// -------------------------------------------------------- BUTTON scroll to top ----------------------------------

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "500") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "500") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow")
        })
    }
});

$(function() {
    $("#btn_to_top").scrollToTop();
});
// ======================================================== / BUTTON scroll to top =================================
// -------------------------------------------------------- modal anketa -------------------------------------------

$(".modal").each(function() {
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout(function() {
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function(e) {
        var target = $(e.target);

        if ($(target).hasClass("overlay")) {
            $(target).find(".modal").each(function() {
                $(this).removeClass("open");
            });
            setTimeout(function() {
                $(target).removeClass("open");
            }, 350);
        }

    });

});

$(".close-modal").on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function() {
        $(modal).parents(".overlay").removeClass("open");
    }, 350);

});
// ======================================================== modal anketa ===========================================