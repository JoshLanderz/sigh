gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

gsap.from("#boardEraser #outline path", {
  duration: 2,
  drawSVG: "0%",
  ease: "power1.inOut",
  stagger: 0.1
});

gsap.fromTo(".hero-wrapper", {
    opacity: 0
},
{
    opacity: 1,
    delay: 0.4,
    duration: 0.5,
    ease: "power1.inOut",
},
)

gsap.to(".hero-wrapper", {
    duration: 1,
    x: 0,
});


gsap.to(".hero-profile-img-wrapper img", {
    scale: 1,
    duration: 0.5,
    delay: 0.5
});

gsap.to(".polygon-section-icon-wrapper", {
    display: "block",
    opacity: 1,
    delay: 1,
    duration: 0.5,
    y: 0
});

gsap.to(".skills-technologies-header", { 
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".skills-technologies-header",
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        /*
        Keywords: Play, Pause, Resume, Reverse, Restart, Reset, Complete, None

        Position: "keyword (1)"
        Position (2): Forward past the end point*/
    },
})


gsap.to(".skills-technologies-element-wrapper", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".skills-technologies-header",
        ease: "power1.inOut",
        toggleActions: "play none none none",
        start: "bottom 40%"
    }
});

gsap.to(".skills-technologies-element-tags-list-row", {
    opacity: 1,
    duration: 1,
    delay: 0.1,
    y: 0,
    scrollTrigger: {
        trigger: ".skills-technologies-element-wrapper",
        ease: "power1.inOut",
        start: "top 100%",
    }
});

gsap.to(".skills-technologies-element-tags i, .skills-technologies-element-tags img", {
    display: "grid",
    rotation: -360,
})

gsap.to(".skills-technologies-element-tags:nth-child(2) i, .skills-technologies-element-tags:nth-child(2) img", {
    display: "grid",
    rotation: 360
})



















// gsap.to(".education-title", { 
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".education-title",
//         start: "top 50%",
//         end: "bottom 20%",
//         /*
//         Keywords: Play, Pause, Resume, Reverse, Restart, Reset, Complete, None

//         Position: "keyword (1)"
//         Position (2): Forward past the end point*/
//     },
// })

gsap.to("#education-section", {
    scrollTrigger: {
        trigger: "#education-section",
        pin: true,
        end: "+=300",
        ease: "power3.inOut",
    }
})

gsap.to(".education-main-title", {
    display: "block",
    y: 50,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".education-main-title",
        start: "top 80%",
    }
})

gsap.to(".featured-projects-title", {
    display: "block",
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".featured-projects-title",
        start: "top 80%",
    }
})


/*Horizontal Scroll */
let educationPanels = gsap.utils.toArray(".education-content-element");

let tween = gsap.to(educationPanels, {
    display: "grid",
    opacity: 1,
    xPercent: -100 * (educationPanels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".education-content-element",
        start: "top top",
        end: "bottom 80%",
        scrub: 2,
        snap: {
            snapTo: 1 / (educationPanels.length - 1),
        },
    }
})


/*Floating Icons*/
const educationIconsAnimation = () => {

  const educationIcons = gsap.utils.toArray(".education-content-element-svg-wrapper img");

  educationIcons.forEach((educationicon, educationi) => {

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(educationicon, { duration: 3, y: "-=30", x: "+=20", rotation: "-=5", ease: "power1.inOut" })
      .to(educationicon, { duration: 2, y: "+=30", x: "-=20", rotation: "-=5", ease: "power1.inOut" })
      .to(educationicon, { duration: 3, y: "-=20", rotation: "+=5", ease: "power1.inOut" })
      .to(educationicon, { duration: 3, y: "+=20", rotation: "+=5", ease: "power1.inOut" })
      .to(educationicon, { duration: 3, y: "-=30", ease: "power1.inOut" })
      .to(educationicon, { duration: 3, y: "+=30", ease: "power1.inOut" })
      .to(educationicon, { duration: 2, y: "-=30", ease: "power1.inOut" })
      .to(educationicon, { duration: 2, y: "+=30", ease: "power1.inOut" });

  });

};

const skillsIconsAnimaion = () => {

  const skillIcons = gsap.utils.toArray(".skills-technologies-element-tags");

  skillIcons.forEach((skillsicon, skillsi) => {

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(skillsicon, { duration: 3, y: "-=10", x: "+=5", ease: "power1.inOut" })
      .to(skillsicon, { duration: 2, y: "+=10", x: "-=5", ease: "power1.inOut" })
      .to(skillsicon, { duration: 3, y: "-=10", rotation: "+=5", ease: "power1.inOut" })
      .to(skillsicon, { duration: 3, y: "+=10", rotation: "+=5", ease: "power1.inOut" })
      .to(skillsicon, { duration: 3, y: "-=10", ease: "power1.inOut" })
      .to(skillsicon, { duration: 3, y: "+=10", ease: "power1.inOut" })
      .to(skillsicon, { duration: 2, y: "-=10", ease: "power1.inOut" })
      .to(skillsicon, { duration: 2, y: "+=10", ease: "power1.inOut" });

  });
};


gsap.to(".featured-projects-element-main", {
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scale: 1,
    scrollTrigger: {
        trigger: ".featured-projects-element-main",
        start: "top 80%",
    }
});

gsap.to(".featured-projects-element", {
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scale: 1,
    scrollTrigger: {
        trigger: ".featured-projects-element",
        start: "top 80%",
    }
});


educationIconsAnimation();

gsap.to(".introduction-pretext", {
    opacity: 1,
    duration: 0.8,
    delay: 0.7,
    y: 0,
})

function animateText() {

let profileNameText = SplitText.create(".hero-profile-name", {
    type: "words, chars, lines"
});

let jobTitleText = SplitText.create(".hero-profile-job-title", {
    type: "words, chars, lines"
});

gsap.from(profileNameText.chars, {
    opacity: 1,
    duration: 0.5,
    delay: 1,
    y: -10,
    yoyo: true,
    stagger: 0.05,
    ease: "power2.out"
});


gsap.from(jobTitleText.words, {
    duration: 0.5,
    opacity: 0.7,
    y: 5,
    stagger: 0.05,
    delay: 1,
    ease: "power2.inOut"
});

/*Scramble Profile Name
gsap.to(".hero-profile-name", {
    opacity: 1,
    duration: 1,
    delay: 0.8,
    scrambleText: {
        chars: "mqwgfr",
        text: "Joshua",
    }
});*/


gsap.to(".skills-technologies-subtitle", {
    opacity: 0.7,
    duration: 1.5,
    delay: 1
});
}

animateText()


function profileSocialLinksAnimation(){
    const socialLinkIcons = gsap.utils.toArray(".profile-img-links-element .social-media-links");
    
    socialLinkIcons.forEach((sociallinkiconsi) => {

        const s1 = gsap.timeline({
            repeat: -1,
            yoyo: true,
        })

s1.to(sociallinkiconsi, { 
  duration: 3, 
  y: "+=15", 
  rotation: "-=3", 
  ease: "power1.inOut" 
})
.to(sociallinkiconsi, { 
  duration: 2, 
  y: "-=15", 
  rotation: "+=2", 
  ease: "power1.inOut" 
})
.to(sociallinkiconsi, { 
  duration: 3, 
  y: "+=5",
  x: "-=5",
  rotation: "+=3", 
  ease: "power1.inOut" 
})
.to(sociallinkiconsi, { 
  duration: 3, 
  y: "-=10", 
  rotation: "-=2", 
  ease: "power1.inOut" 
});
    });
}

function locationIconAnimation() {
  const locationIcon = document.querySelector(".hero-profile-location");

  if (!locationIcon) {
    console.error("No element found with .hero-profile-location");
    return;
  }

  const t2 = gsap.timeline({
    repeat: -1,
    yoyo: true
  });

  t2.to(locationIcon, { duration: 3, y: "-=30", x: "+=20", rotation: "-=5", ease: "power1.inOut" })
    .to(locationIcon, { duration: 2, y: "+=30", x: "-=20", rotation: "-=5", ease: "power1.inOut" })
    .to(locationIcon, { duration: 3, y: "-=20", rotation: "+=5", ease: "power1.inOut" })
    .to(locationIcon, { duration: 3, y: "+=20", rotation: "+=5", ease: "power1.inOut" })
    .to(locationIcon, { duration: 3, y: "-=30", ease: "power1.inOut" })
    .to(locationIcon, { duration: 3, y: "+=30", ease: "power1.inOut" })
    .to(locationIcon, { duration: 2, y: "-=30", ease: "power1.inOut" })
    .to(locationIcon, { duration: 2, y: "+=30", ease: "power1.inOut" });
}

profileSocialLinksAnimation();
locationIconAnimation();


function hoverTimeout(h) {
        h.classList.add("no-hover");

        setTimeout(() => {
            h.classList.remove('no-hover');
        }, 7000);

}

function transformText(t) {
  const tl = gsap.timeline();

  tl.to(t, { 
    x: 0, 
    opacity: 1, 
    duration: 1,
    ease: "power3.in"
  }, "+=3")
  .to(t, { 
    x: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out" 
  }, "+=3"); // "+=3" handles the pause at the right side
}

function locationTextAnimation() {
    let locationElement = document.querySelector(".hero-profile-location");
    let hoverLocationElement = hoverTimeout(locationElement);

    let locationText = document.querySelector(".barbados-text");
    let transformedLocationText = transformText(locationText);

    gsap.set(locationText, {opacity: 0})
    
    locationElement.addEventListener('mouseenter', () => {
        gsap.to(locationText, {
            opacity: 0.7,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    locationElement.addEventListener('mouseleave', () => {
        gsap.to(locationText, {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power2.in"
        });
    });
}

locationTextAnimation();


function socialMediaTextAnimation() {
    let socialMediaElements = document.querySelectorAll(".social-media-links");

    socialMediaElements.forEach((socialMediaElement) => {

        let socialMediaText = socialMediaElement.querySelector(".social-media-text");

        gsap.set(socialMediaText, {
            opacity: 0,
            x: -100
        });

        socialMediaElement.addEventListener('mouseenter', () => {
            gsap.to(socialMediaText, {
                opacity: 0.7,
                x: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        socialMediaElement.addEventListener('mouseleave', () => {
            gsap.to(socialMediaText, {
                opacity: 0,
                x: -100,
                duration: 0.5,
                ease: "power2.in"
            });
        });

    });
}

socialMediaTextAnimation();




//////////////////////////
// Target each tech item
const cards = document.querySelectorAll('.skills-technologies-element-tags');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      x: x * 0.2, // Subtle translation
      y: y * 0.2,
      rotateX: -y * 0.1, // Subtle 3D tilt
      rotateY: x * 0.1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)' // Smooth spring snap-back
    });
  });
});