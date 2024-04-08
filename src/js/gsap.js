import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function anim() {
    gsap.from(".header__item, .header__logo", {
        duration: 1,
        y: -100,
        opacity: 1,
        ease: "power2.out",
    });
    gsap.from(".page-home__content", {
        duration: 1,
        x: -100,
        opacity: 1,
        ease: "power2.out",
    });
    gsap.from(".page-home__swiper", {
        duration: 1,
        x: 100,
        opacity: 1,
        ease: "power2.out",
    });

    gsap.from(
        ".page-about__content, .page-about__left img, .page-about__middle ",
        {
            scrollTrigger: {
                trigger: ".page-about",

                start: " 70% centre",
                end: " +=200px",
                scrub: true,
            },
            opacity: 0,
            stagger: 1,
            duration: 1.5,
        }
    );

    gsap.from(" .page-tasks__title, .page-tasks__body", {
        scrollTrigger: {
            trigger: ".page-tasks",

            start: " 70% centre",
            end: " +=200px",
            scrub: true,
        },
        opacity: 0,
        stagger: 1,
        duration: 1.5,
    });

    gsap.from(
        " .page-projects__title, .page-projects__top, .page-projects__bottom, .page-projects__all-link",
        {
            scrollTrigger: {
                trigger: ".page-projects",
                markers: true,
                start: " 120% centre",
                // end: " +=400px",
                scrub: true,
            },
            opacity: 0,
            stagger: 1,
            duration: 1.5,
        }
    );
}
