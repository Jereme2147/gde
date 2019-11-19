const desktop = window.matchMedia("(min-width: 950px)");
const black = "rgba(16, 14, 16, 1)";
const white = "rgba(236, 234, 237, 1)";
const darkGrey = "rgba(43, 48, 58, 1)";
const yellow = "rgba(249, 195, 53, 1)";
const blue = "rgba(28, 63, 140, 1)";

$(document).ready(function() {
    $(".hamburger-div").click(function() {
        $(".hamburger").toggleClass("is-active");
        menu();
    })
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
        if (z.y > 300) {
            if (menu == '125px') {
                $("#navbar").css({ height: "75px" })
                $(".nav-box").css({borderBottom: "none"});
            }
        } else {
            if (menu == '75px') {
                $("#navbar").css({ height: "125px" });
                $(".nav-box").css({ borderBottom: `4px solid ${black}` });
            }
        }
    } else {
        if (z.y > 500) {
            if (menu == '75px') {
                $("#navbar").css({ height: "50px" });
                $(".nav-box").css({ borderBottom: `none` });
            }
        } else {
            if (menu == '50px') {
                $("#navbar").css({ height: "75px" });
                $(".nav-box").css({ borderBottom: `4px solid ${black}` });
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