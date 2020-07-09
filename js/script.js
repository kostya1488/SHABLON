// ======================================================== fixed menu ============================================
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
// -------------------------------------------------------- / fixed menu ------------------------------------------
// ======================================================== scroll to section =====================================
$(function() {

    $('.some_link').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 300);
        e.preventDefault();
    });
});

// -------------------------------------------------------- / scroll to section -----------------------------------