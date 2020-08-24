// selector
let header = $("#header");
let topbar = $(".top-bar");
let btn_to_top = $("#btn_to_top");

$(window).scroll(() => {

    // Fixed menu when scrolling
    let topbarHeight = topbar.outerHeight();
    let headerHeight = header.outerHeight();

    if ($(window).scrollTop() > topbarHeight) {
        header.addClass("sticky");
        $('.carousel-area').css('margin-top', headerHeight);
    } else {
        header.removeClass("sticky");
        $('.carousel-area').css('margin-top', 0);

    }

    // show and hide scroll to top button
    if ($(window).scrollTop() > 1200) {
        btn_to_top.fadeIn();
    } else {
        btn_to_top.fadeOut();

    }
});

// scroll to section
$('.menu_link').on('click', function(e) {
    $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1200);
    e.preventDefault();

    if (!$(this).hasClass('active')) {
        $('.menu_link').removeClass('active');

        $(this).addClass('active');
    }
    header.removeClass("mob_menu_active");
});


// hide and show drop menu
$("#toggle_button").click(() => {
    toggleClass(header, "mob_menu_active");
    topbar.removeClass("right_panel_open");
});

$("#right_panel_button").click(() => {
    toggleClass(topbar, "right_panel_open");
    header.removeClass("mob_menu_active");

});

hideDropMenu("mob_menu_active");
hideDropMenu("right_panel_open");

function hideDropMenu(classActive) {
    $(document).mouseup(function(e) {
        var div = $("." + classActive);
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.removeClass(classActive);
        }
    });
}


function toggleClass(elem, class_name) {
    elem.hasClass(class_name) ? elem.removeClass(class_name) : elem.addClass(class_name);
}


// show/hide modal anketa
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

// animation after form send
$("#callback_forma").submit(() => {

    $(".modal").removeClass("open");

    setTimeout(() => {
        $(".content").hide();
        $(".response").show();

        $(".modal").addClass("open");
    }, 1000);
    return false;
});