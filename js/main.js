const desktop = window.matchMedia("(min-width: 950px)");
const black = "rgba(16, 14, 16, 1)";
const white = "rgba(236, 234, 237, 1)";
const darkGrey = "rgba(43, 48, 58, 1)";
const yellow = "rgba(249, 195, 53, 1)";
const blue = "rgba(28, 63, 140, 1)";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let $el = $('.banner-div');
let bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
// $("#landing-top-spacer").css({ height: `${Math.floor(bottom)}px`});
// $(".banner-text").css({ height: `${Math.floor(bottom)}px` });
$(".banner-text").css({ height: `${bottom}px` });

$(document).ready(function() {
    // $(this).scrollTop(0);
    $(".hamburger-div").click(function() {
        $(".hamburger").toggleClass("is-active");
        menu();
    })
    //sets the banner text height. replaces 20 media queries.
 
})

function menu(){
    const opacity = $(".mobile-menu").css('opacity');
    if (opacity == '0') {
        $('.mobile-menu').animate({ opacity: '1' }, 500);
        $('.mobile-menu').css({ pointerEvents: 'auto' });
    } else {
        $('.mobile-menu').animate({ opacity: '' }, 500);
        $('.mobile-menu').css({ pointerEvents: 'none' });
    }
}
//******************Scroll actions functions */
function scrollNum() {

    let z = fixWindow();
    let menu = $('#navbar').css("height");
    let reg = /[0-9]/g;
    if (desktop.matches) {
        if (z.y > 200) {
            if (menu == '125px') {
                $("#navbar").css({ height: "75px" })
                $(".nav-box").css({borderBottom: "none"});
                $(".banner-text").css({opacity: "0"});
            }
        } else {
            if (menu == '75px') {
                $("#navbar").css({ height: "125px" });
                $(".nav-box").css({ borderBottom: `4px solid ${black}` });
                //if opacity ends up being an issue using transition, just change
                //to fadeOut()
                $(".banner-text").css({ opacity: "1" });
            }
        }
    } else {
        if (z.y > 100) {
            if (menu == '75px') {
                $("#navbar").css({ height: "50px" });
                $(".banner-text").css({ opacity: "0" });
                $(".nav-box").css({ borderBottom: `none` });
            }
        } else {
            if (menu == '50px') {
                $("#navbar").css({ height: "75px" });
                $(".nav-box").css({ borderBottom: `4px solid ${black}` });
                $(".banner-text").css({ opacity: "1" });
            }
        }
    }
    
}
function fixWindow() {
    var doc = document,
        w = window;
    var x, y, docEl;

    if (typeof w.pageYOffset === "number") {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl =
            doc.compatMode && doc.compatMode === "CSS1Compat"
                ? doc.documentElement
                : doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return { x: x, y: y };
}