// -------------------------------------------------------- fixed menu --------------------------------------------
$(window).scroll(() => {
    let topbarHeight = $('.top-bar').outerHeight();
    let headerHeight = $('header').outerHeight();

    if ($(window).scrollTop() > topbarHeight) {
        $('header').addClass("sticky");
        $('.carousel-area').css('margin-top', headerHeight);
    } else {
        $('header').removeClass("sticky");
        $('.carousel-area').css('margin-top', 0);

    }
});
// ======================================================== / fixed menu ==========================================
// -------------------------------------------------------- toggle drop menu --------------------------------------
let header = $("#header");
let topbar = $(".top-bar");


$("#toggle_button").click(() => {
    toggleClass(header, "open_menu");
    topbar.removeClass("right_panel_open");
});

$("#right_panel_button").click(() => {
    toggleClass(topbar, "right_panel_open");
    header.removeClass("open_menu");

});

function toggleClass(elem, class_name) {
    elem.hasClass(class_name) ? elem.removeClass(class_name) : elem.addClass(class_name);
}

// ======================================================== / toggle drop menu ====================================

// -------------------------------------------------------- scroll to section -------------------------------------

$('.menu_link').on('click', function(e) {
    $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1200);
    e.preventDefault();

    if (!$(this).hasClass('active')) {
        $('.menu_link').removeClass('active');

        $(this).addClass('active');
    }
    header.removeClass("open_menu");

});

// ======================================================== / scroll to section ===================================
// -------------------------------------------------------- add/remove active class -------------------------------------


// ======================================================== / add/remove active class ===================================
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
// -------------------------------------------------------- show/hide modal anketa -------------------------------------------

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
// ======================================================== show/hide modal anketa ===========================================
// -------------------------------------------------------- send callback form -------------------------------------------

// ======================================================== / send callback form ===========================================