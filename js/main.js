// === Mobile Menu Toggle + Animations ===
document.addEventListener("DOMContentLoaded", function () {
  // === Locomotive Scroll ===
  const scrollContainer = document.querySelector("[data-scroll-web_page]");
  const navbar = document.querySelector(".header");
  const isMobile = window.innerWidth <= 768;

  const scroller = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    multiplier: isMobile ? 1.6 : 1.1,
    lerp: isMobile ? 0.085 : 0.09,
    smartphone: {smooth: true},
    tablet: {smooth: true},
    getDirection: true,
    getSpeed: true,
  });

  // Update on resize
  new ResizeObserver(() => scroller.update()).observe(scrollContainer);

  // === GSAP + ScrollTrigger Setup ===
  gsap.registerPlugin(ScrollTrigger);

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();

  // === Home banner animation ===
  function bannerAnimation() {
    var tl = gsap.timeline();
    tl.from(".logo, .unorder-list li", {
      y: -40,
      opacity: 0,
      delay: 5.2,
      stagger: isMobile ? 0.06 : 0.15,
    });

    tl.from(".main-txt", {
      x: -200,
      duration: isMobile ? 0.4 : 0.3,
      opacity: 0,
    });

    tl.from(".white-btn-galaxy-button-wrapper", {
      duration: isMobile ? 0.01 : 0.3,
      opacity: 0,
      x: -150,
    });

    tl.from(
      ".right-svg",
      {
        scale: 0.5,
        opacity: 0,
        duration: isMobile ? 0.8 : 0.4,
      },
      "-=0.2"
    );

    tl.from(".profile-main", {
      scale: 1.4,
      y: 30,
      opacity: 0,
      duration: isMobile ? 0.8 : 0.8,
    });
  }
  bannerAnimation();

  // === About Section Animation ===
  function aboutSection() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scroller: scrollContainer,
        start: isMobile ? "top 98%" : "top 95%",
        end: isMobile ? "bottom 80%" : "bottom 55%",
        scrub: isMobile ? 0.75 : 3,
      },
    });

    tl.from(".about-main-heading", {
      scale: 0.4,
      opacity: 0,
      duration: isMobile ? 0.35 : 0.7,
      ease: "power3.out",
    })
      .from(".about-left", {
        x: -150,
        opacity: 0,
        duration: isMobile ? 0.6 : 1.2,
        ease: "power3.out",
      })
      .from(
        ".about-right h2",
        {
          x: 150,
          opacity: 0,
          duration: isMobile ? 0.5 : 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".about-right p",
        {
          y: 40,
          opacity: 0,
          duration: isMobile ? 0.5 : 1,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }
  aboutSection();

  // === Skill Section Animation ===
  function skillSection() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skill-wrapper",
        scroller: scrollContainer,
        start: "top 90%",
        end: "bottom 80%",
      },
    });

    tl.from(".skill-wrapper h3", {
      scale: 0.4,
      opacity: 0,
      duration: isMobile ? 0.3 : 0.6,
      ease: "power3.out",
    })
      .from(".skill-para", {
        y: 30,
        opacity: 0,
        duration: isMobile ? 0.25 : 0.5,
        ease: "power2.out",
      })
      .from(".skill", {
        y: -40,
        opacity: 0,
        stagger: isMobile ? 0.1 : 0.2,
        ease: "power2.out",
      });
  }
  skillSection();

  // === Work Section Animation ===
  function workSection() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        scroller: scrollContainer,
        start: isMobile ? "top 98%" : "top 95%",
        end: isMobile ? "bottom 94%" : "bottom 65%",
        scrub: 2,
      },
    });

    tl.from(".work-section h3", {
      scale: 0.4,
      opacity: 0,
      duration: isMobile ? 0.6 : 1.2,
      ease: "power3.out",
    }).from(".work-item", {
      y: 50,
      opacity: 0,
      duration: isMobile ? 0.5 : 1,
      stagger: isMobile ? 0.15 : 0.25,
      ease: "power2.out",
    });
  }
  workSection();

  // === Hobbies Section Animation ===
  function hobbiesSection() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hobbies-wrapper",
        scroller: scrollContainer,
        start: isMobile ? "top 150%" : "top 95%",
        end: isMobile ? "bottom 110%" : "bottom 90%",
        scrub: isMobile ? 1.15 : 6,
      },
    });

    tl.from(".hobbies-wrapper h2", {
      scale: 0.4,
      opacity: 0,
      duration: isMobile ? 0.6 : 1.2,
      ease: "power3.out",
    })
      .from(".hobbies-image img", {
        x: -150,
        opacity: 0,
        duration: isMobile ? 0.8 : 0.6,
        ease: "power3.out",
      })
      .from(".hobbies-content h3", {
        y: -30,
        opacity: 0,
        duration: isMobile ? 0.2 : 0.4,
        ease: "power2.out",
      })
      .from(".hobbies-content p", {
        y: -20,
        opacity: 0,
        duration: isMobile ? 0.3 : 0.3,
        ease: "power2.out",
      })
      .from(".hoby-items", {
        x: 120,
        opacity: 0,
        duration: isMobile ? 0.18 : 0.5,
        stagger: isMobile ? 0.14 : 0.3,
        ease: "power2.out",
      });
  }
  hobbiesSection();

  // === Footer Section Animation ===
  function footerSection() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        scroller: scrollContainer,
        start: isMobile ? "top 98%" : "top 98%",
        end: isMobile ? "bottom 95%" : "bottom 92%",
        scrub: 2,
      },
    });

    tl.from(".contact h2", {
      scale: 0.4,
      opacity: 0,
      duration: isMobile ? 0.35 : 0.7,
      ease: "power3.out",
    })
      .from(".icons", {
        scale: 0.8,
        opacity: 0,
        stagger: isMobile ? 0.08 : 0.15,
        ease: "back.out(1.7)",
      })
      .from(".mail-section", {
        y: 40,
        opacity: 0,
        duration: isMobile ? 0.3 : 0.6,
        ease: "power2.out",
      });
  }
  footerSection();

  let lastScrollTop = 0;

  scroller.on("scroll", (args) => {
    let scrollTop = args.scroll.y;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("scrollUp");
    } else {
      navbar.classList.remove("scrollUp");
    }

    lastScrollTop = scrollTop;
  });

  const navLinks = document.querySelectorAll("[data-scroll-to]");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        scroller.scrollTo(targetEl, {
          offset: -50,
          duration: 800,
          easing: [0.25, 0.0, 0.35, 1.0],
        });
      }
    });
  });
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });
});

// Pre loader
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
var elements = [
  document.querySelector(".titlebg"),
  document.querySelector(".copytext"),
  document.querySelector(".classsvglogo"),
  document.querySelector("h2 span"),
  document.querySelector("h2 span:nth-child(2)"),
  document.querySelector("h2 span:nth-child(3)"),
  document.querySelector("h2 span:nth-child(4)"),
];

function togglePlayState(isHidden) {
  elements.forEach((el) => {
    if (!el) return;
    el.classList.toggle("noplay", isHidden);
  });
}
togglePlayState(document[hidden]);
document.addEventListener(
  visibilityChange,
  () => {
    togglePlayState(document[hidden]);
  },
  false
);
document.addEventListener("DOMContentLoaded", function () {
  elements[0]?.classList.add("titleanim");
  elements[1]?.classList.add("copyanim");
  elements[2]?.classList.add("logoanim");

  elements.slice(3).forEach((el) => el?.classList.add("storyanim"));
});
