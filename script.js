
gsap.registerPlugin();

const menu = document.querySelector(".menubar");
const menuBtn = document.querySelector(".btn");
const menuHidden = document.querySelector(".menuhidden");

const menuItems = document.querySelectorAll(".menuhidden li");
const menuImages = document.querySelectorAll(".bg img");

let isOpen = false;

// Initial state
gsap.set(menu, {
    width: 300,
    height: 50,
    borderRadius: "26px"
});

gsap.set(menuHidden, {
    opacity: 0,
    visibility: "hidden"
});

gsap.set(menuItems, {
    y: 30,
    opacity: 0
});

gsap.set(menuImages, {
    scale: 1.2,
    opacity: 0
});


// =========================
// OPEN MENU
// =========================

function openMenu() {

    isOpen = true;

    menuBtn.classList.add("active");

    const tl = gsap.timeline();


    tl.to(menu, {
        width: 340,
        duration: 0.35,
        ease: "power2.out"
    })


    .to(menu, {
        height: 260,
        duration: 0.65,
        borderRadius: "16px",
        ease: "power4.out"
    })


    .set(menuHidden, {
        visibility: "visible",
        pointerEvents: "auto"
    })

    .to(menuHidden, {
        opacity: 1,
        duration: 0.15
    })


    .to(menuItems, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
    }, "-=0.05")


    .to(menuImages, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out"
    }, "-=0.35");
}




function closeMenu() {

    isOpen = false;

    menuBtn.classList.remove("active");

    const tl = gsap.timeline();

    tl.to(menuItems, {
        y: 20,
        opacity: 0,
        duration: 0.25,
        stagger: 0.04,
        ease: "power2.in"
    })

    .to(menuImages, {
        opacity: 0,
        scale: 1.1,
        duration: 0.2
    }, "<")


    .to(menuHidden, {
        opacity: 0,
        duration: 0.15
    })

    .set(menuHidden, {
        visibility: "hidden",
        pointerEvents: "none"
    })

    .to(menu, {
        height: 50,
        duration: 0.5,
        borderRadius: "26px",
        ease: "power2.inOut"
    })

    .to(menu, {
        width: 300,
        duration: 0.4,
        ease: "power2.inOut"
    });
}




menuBtn.addEventListener("click", () => {

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

});
