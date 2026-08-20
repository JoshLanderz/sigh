document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    const sections = gsap.utils.toArray(".element");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-x-wrapper",
            pin: true,
            scrub: true,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".scroll-x-wrapper").offsetWidth
        }
    });

});


gsap.fromTo(".myrectangle", {
    drawSVG: "0%"
    },
    {
        drawSVG: "100%", duration: 1
    }
);