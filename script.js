function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

gsap.from(".behind",{
    opacity: 0,
    scale: 0,
    delay: 2.8,
    duration: 1,
});

gsap.from(".img",{
    scale: 1.1,
    delay: 2,
    duration: 1,
});

gsap.from(".text1 ,.text2",{
    opacity: 0,
    x: 10,
    delay: 2.5,
    duration: 0.5,
});

gsap.from(".text4 ,.text5",{
    opacity: 0,
    delay: 2.5,
    duration: 0.5,
});

gsap.from(".circle , .page2",{
    opacity: 0,
    delay: 2.5,
    duration: 0.5,
});


gsap.from(".page1",{
    opacity: 0,
    scale: 0.5,
    delay: 1,
    duration: 2,
})