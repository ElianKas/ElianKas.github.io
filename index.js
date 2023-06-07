
var activeHeader = false;

        function toggleMenu(){
            if(activeHeader === false){
                activeHeader = true;

                anime({
                    targets: "#Navigation",
                    rotate: 25,
                });

                anime({
                    targets: "#header",
                    opacity: 1,
                    height: "100vh",
                    duration: 1000,
                });
            }else if(activeHeader === true){
                activeHeader = false;

                anime({
                    targets: "#Navigation",
                    rotate: 0,
                });

                anime({
                    targets: "#header",
                    opacity: {
                        value: 0,
                        duration: 1000,
                    },
                    height: {
                        value: 0,
                        duration: 1000,
                    },
                });
            };
        };

//scroll event

let tl = anime.timeline({
    autoplay: false,
    loop: false,
});
tl.add({
    targets: "#project1",
    easing: 'linear',
    keyframes: [
        {translateX: ["100%", "0%"], scale: [0, 1]},
    ],
    duration: 500,
}).add({
    targets: "#myVideo",
    easing: 'linear',
    keyframes: [
        {opacity: [1, 0]},
    ],
    duration: 500,
}, '-=500').add({
    targets: "#aside",
    easing: 'linear',
    keyframes: [
        {opacity: [1, 0], left: "-5%"},
    ],
    duration: 100,
}, '-=200').add({
    targets: "#teaser",
    easing: 'linear',
    keyframes: [
        {opacity: [1, 0]},
    ],
    duration: 200,
}, '-=500').add({
    targets: "#project1",
    easing: 'linear',
    keyframes: [
        {translateX: ["0%", "-100%"], scale: [1, 0]},
    ],
    duration: 500,
}, '+=250').add({
    targets: "#project2",
    easing: 'linear',
    keyframes: [
        {translateX: ["100%", "0%"], scale: [0, 1]},
    ],
    duration: 500,
}, "-=600").add({
    targets: "#project2",
    easing: 'linear',
    keyframes: [
        {translateX: ["0%", "-100%"], scale: [1, 0]},
    ],
    duration: 500,
}, '+=250').add({
    targets: "#project3",
    easing: 'linear',
    keyframes: [
        {translateX: ["100%", "0%"], scale: [0, 1]},
    ],
    duration: 500,
}, "-=600").add({
    targets: "#project3",
    easing: 'linear',
    keyframes: [
        {translateX: ["0%", "-100%"], scale: [1, 0]},
    ],
    duration: 500,
}, '+=250').add({
    targets: "#myVideo",
    easing: 'linear',
    keyframes: [
        {opacity: [0, 1]},
    ],
    duration: 500,
}, '-=500');

function toProject1(){
    window.scrollTo(0, 600);
};

function toProject2(){
    window.scrollTo(0, 1300);
};

function toProject3(){
    window.scrollTo(0, 2100);
};

window.onscroll = function(e) {
    tl.seek(scrollY);
    console.log(scrollY);
};