
//heres a problem that should be solved, subtitles on streaming movies where the subtitles are in the frame instead of the black bars.

window.onscroll = function () {
    scrollRotate();

};


$(document).ready(function () {

    var img_width = $(".big-project-photo").attr("width");
    var img_height = $(".big-project-photo").attr("height");

    $('.big-project-photo').hover(
        function () {
            $(this).animate({
                width: img_width + 50 + "px", height: img_height
                    + 50 + "px", top: "-25px", left: "-25px"
            }, 'fast');
        },
        function () {
            $(this).animate({
                width: img_width + "px", height: img_height +
                    "px", top: "0px", left: "0px"
            }, 'fast');
        }

    );
});





var scrollableElement = document.body;

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        document.getElementById("pagescroll").scrollTop += -3000;
        replace()


    } else {
        $("#chickenhawk").click()
        replace2()

        console.log('Down');
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}



function scrollRotate() {
    let image = document.getElementById("chickenhawk");
    let image2 = document.getElementById("chickenhawk2");

    image.style.transform = "rotate(" + window.pageYOffset / 16 + "deg)";
    image2.style.transform = "rotate(" + window.pageYOffset / 16 + "deg)";
    image.style.bottom = window.pageYOffset / 100 + "px"
}
function scrollmoveDown() {
    let image = document.getElementById("arrow");
    image.style.bottom = "100px"

}

function replace() {
    let image = document.getElementById("chickenhawk");
    let newArrow = document.getElementById("chickenhawk2")
    image.style.display = "none"
    newArrow.style.display = "inherit"


    image.style.transform = "rotate(" + 45 + "deg)";
    newArrow.style.transform = "rotate(" + 45 + "deg)";




}
function replace2() {
    let image = document.getElementById("chickenhawk");
    let newArrow = document.getElementById("chickenhawk2")
    image.style.display = "inherit"
    newArrow.style.display = "none"
}

function scrollDiv() {
    document.getElementById("pagescroll").scrollTop += 2000;;
}
$("#chickenhawk").on("click", function () {

    // scrollDivElement.scrollTo({
    //     top: 67,
    //     behavior: 'smooth'

    // })

    let image = document.getElementById("chickenhawk");
    let image2 = document.getElementById("chickenhawk2");



    image.style.transform = "rotate(" + 45 + "deg)";
    image2.style.transform = "rotate(" + 45 + "deg)";



})


$("#chickenhawk2").on("click", function () {
    let image = document.getElementById("chickenhawk");
    let image2 = document.getElementById("chickenhawk2");

    image.style.transform = "rotate(" + -16 + "deg)";
    image2.style.transform = "rotate(" + -16 + "deg)";



    // $("#container-911").css("margin-top", "11vh");





})

document.getElementById("chickenhawk2").addEventListener("click", function () { setTimeout(replace2, 200) });

document.getElementById("chickenhawk").addEventListener("click", function () { setTimeout(replace, 200) });

document.getElementById("portfolioEvent").addEventListener("click", function () { setTimeout(replace, 200) })

document.getElementById("portfolioEvent").addEventListener("click", function () { setTimeout(replace, 200) })
document.getElementById("portfolio-side-link").addEventListener("click", function () { setTimeout(replace, 200) })

document.getElementById("chickenhawk").addEventListener("click", function () { setTimeout(replace, 200) });


$(".side-link").on("click", function () {
    $("#aboutmodal").modal('hide');
});


$(".side-link").on("click", function () {
    $("#resumemodal").modal('hide');
});





$(".big-project-photo").on("click", function () {
    var scroll = $("#scrollable-div").scrollTop();

    console.log(scroll)
})

var scrollDivElement = document.getElementById('scrollable-div');

$("#down-cli").on("click", function () {



    scrollDivElement.scrollTo({
        top: 167,
        behavior: 'smooth'

    })

})

$("#down-this").on("click", function () {

    scrollDivElement.scrollTo({
        top: 296,
        behavior: 'smooth'

    })

})

$("#down-poke").on("click", function () {

    scrollDivElement.scrollTo({
        top: 500,
        behavior: 'smooth'

    })

})

$("#up-tune").on("click", function () {


    scrollDivElement.scrollTo({
        top: 0,
        behavior: 'smooth'

    })

})

$("#up-cli").on("click", function () {


    scrollDivElement.scrollTo({
        top: 167,
        behavior: 'smooth'

    })

})

$("#up-this").on("click", function () {


    scrollDivElement.scrollTo({
        top: 296,
        behavior: 'smooth'

    })

})







$(function () {

    $("#scrollable-div").scroll(function () {
        var scroll = $("#scrollable-div").scrollTop();

        if (scroll >= 150) {



            $("#this-big").css("height", "initial")
            $("#tune-big").css("height", "11vh")
            $("#poke-big").css("height", "11vh")
            $("#cli-big").css("height", "11vh")


            $("#this-big").css("width", "66.953125vw")
            $("#tune-big").css("width", "auto")
            $("#poke-big").css("width", "auto")
            $("#cli-big").css("width", "auto")
            // width is 857px

            $("#this-big").css("margin-left", "0px")
            $("#tune-big").css("margin-left", "46vw")
            $("#poke-big").css("margin-left", "46vw")
            $("#cli-big").css("margin-left", "46vw")





            $("#tune-logo").css("display", "none")
            $("#cli-logo").css("display", "none")
            $("#this-logo").css("display", "inherit")
            $("#poke-logo").css("display", "none")

            $("#cli-title").css("display", "none")
            $("#p-cli").css("display", "none")

            $("#this-title").css("display", "inherit")
            $("#p-this").css("display", "inherit")


            $("#tune-title").css("display", "none")
            $("#p-tune").css("display", "none")
            $("#tune-title").css("display", "none")
            $("#p-tune").css("display", "none")
            $("#poke-title").css("display", "none")
            $("#p-poke").css("display", "none")

            $("#down-cli").css("display", "none");
            $("#down-this").css("display", "inherit");
            $("#down-poke").css("display", "none");
            $("#down-tune").css("display", "none");


            $("#up-tune").css("display", "inherit")
            $("#up-this").css("display", "none");
            $("#up-cli").css("display", "none");

            $("#cli-side").css("display", "inherit")
            $("#this-side").css("display", "none")
            $("#poke-side").css("display", "none")


            $("#scroll-flair").css("top", "86vh")

            $("#down").css("display", "inherit")

            $("#github-link").attr("href", "https://github.com/JayG92/thissocialmedia")
            $("#link-link").attr("href", "https://thissocial.herokuapp.com/")

        }

        if (scroll >= 250) {



            $("#this-big").css("height", "11vh")
            $("#tune-big").css("height", "11vh")
            $("#cli-big").css("height", "initial")
            $("#poke-big").css("height", "11vh")

            $("#this-big").css("width", "auto")
            $("#tune-big").css("width", "auto")
            $("#cli-big").css("width", "66.953125vw")
            $("#poke-big").css("width", "auto")



            $("#this-big").css("margin-left", "46vw")
            $("#tune-big").css("margin-left", "46vw")
            $("#poke-big").css("margin-left", "46vw")
            $("#cli-big").css("margin-left", "0px")




            $("#this-logo").css("display", "none")
            $("#cli-logo").css("display", "inherit")
            $("#tune-logo").css("display", "none")


            $("#this-title").css("display", "none")
            $("#p-this").css("display", "none")

            $("#cli-title").css("display", "inherit")
            $("#p-cli").css("display", "inherit")
            $("#tune-title").css("display", "none")
            $("#p-tune").css("display", "none")
            $("#poke-title").css("display", "none")
            $("#p-poke").css("display", "none")

            $("#down-poke").css("display", "inherit");
            $("#down-cli").css("display", "none");
            $("#down-this").css("display", "none");
            $("#down-tune").css("display", "none");

            $("#down-poke").css("display", "inherit");
            $("#up-tune").css("display", "none");
            $("#up-cli").css("display", "none");

            $("#up-cli").css("display", "inherit");


            $("#this-side").css("display", "none")
            $("#poke-side").css("display", "inherit")
            $("#cli-side").css("display", "none")



            $("#down").css("display", "inherit")

            $("#github-link").attr("href", "https://github.com/KPJBuchik/weatherApp")
            $("#link-link").attr("href", "https://enigmatic-temple-47946.herokuapp.com/")
            $("#scroll-flair").css("opacity", "0")



        }
        if (scroll >= 400) {


            $("#this-big").css("height", "11vh")
            $("#tune-big").css("height", "11vh")
            $("#cli-big").css("height", "11vh")
            $("#poke-big").css("height", "initial")


            $("#this-big").css("width", "auto")
            $("#tune-big").css("width", "auto")
            $("#cli-big").css("width", "auto")
            $("#poke-big").css("width", "66.953125vw")


            $("#this-big").css("margin-left", "46vw")
            $("#tune-big").css("margin-left", "46vw")
            $("#poke-big").css("margin-left", "0px")
            $("#cli-big").css("margin-left", "46vw")

            $("#poke-title").css("display", "inherit")
            $("#p-poke").css("display", "inherit")

            $("#cli-title").css("display", "none")
            $("#p-cli").css("display", "none")
            $("#tune-title").css("display", "none")
            $("#p-tune").css("display", "none")
            $("#this-title").css("display", "none")
            $("#p-this").css("display", "none")

            $("#down-poke").css("display", "inherit");

            $("#down-cli").css("display", "none");
            $("#down-this").css("display", "none");
            $("#down-tune").css("display", "none");
            $("#up-tune").css("display", "none");

            $("#up-cli").css("display", "none");

            $("#up-this").css("display", "inherit");

            $("#poke-side").css("display", "none")
            $("#cli-side").css("display", "none")


            $("#down").css("display", "none")

            $("#github-link").attr("href", "https://github.com/KPJBuchik/space-knight2")
            $("#link-link").attr("href", "https://kpjbuchik.github.io/space-knight2/")



            $("#this-logo").css("display", "none")
            $("#cli-logo").css("display", "none")
            $("#tune-logo").css("display", "none")
            $("#poke-logo").css("display", "inherit")



            $("#scroll-flair").css("opacity", "0")

        }

        if (scroll == 0) {

            $("#this-big").css("height", "11vh")
            $("#tune-big").css("height", "initial")
            $("#cli-big").css("height", "11vh")
            $("#poke-big").css("height", "11vh")


            $("#this-big").css("width", "auto")
            $("#tune-big").css("width", "66.953125vw")
            $("#cli-big").css("width", "auto")
            $("#poke-big").css("width", "auto")

            $("#this-big").css("margin-left", "46vw")
            $("#tune-big").css("margin-left", "0px")
            $("#poke-big").css("margin-left", "46vw")
            $("#cli-big").css("margin-left", "46vw")


            $("#down-cli").css("display", "inherit")

            $("#tune-logo").css("display", "inherit");
            $("#this-logo").css("display", "none");
            $("#poke-logo").css("display", "none");
            $("#cli-logo").css("display", "none");


            $("#tune-title").css("display", "inherit")
            $("#p-tune").css("display", "inherit")


            $("#cli-title").css("display", "none")
            $("#p-cli").css("display", "none")
            $("#this-title").css("display", "none")
            $("#p-this").css("display", "none")
            $("#poke-title").css("display", "none")
            $("#p-poke").css("display", "none")

            $("#up-this").css("display", "none");
            $("#up-cli").css("display", "none");
            $("#up-tune").css("display", "inherit")


            $("#down-cli").css("display", "inherit");
            $("#down-this").css("display", "none");
            $("#down-poke").css("display", "none");

            $("#poke-side").css("display", "none")
            $("#this-side").css("display", "inherit")
            $("#cli-side").css("display", "inherit")

            // $("#down").css("display","inherit")

            $("#github-link").attr("href", "https://github.com/KPJBuchik/TuneAlmanac")
            $("#link-link").attr("href", "https://kpjbuchik.github.io/TuneAlmanac/#")





        }

    });
});



