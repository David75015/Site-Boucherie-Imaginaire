const section1 = document.querySelector('.section1');
const section1Logo = section1.querySelector('.logo');
const section1Title = section1.querySelector('h2');
const section1Text = section1.querySelector('p');
let animationFrame;

function updateSection1Position() {
    const sectionProgress = Math.min(
        Math.max(window.scrollY / section1.offsetHeight, 0),
        1
    );
    const maxLogoShift = Math.min(window.innerWidth * 0.45, 520);
    const maxTextShift = Math.min(window.innerWidth * 2, 2200);
    const logoShift = sectionProgress * maxLogoShift;
    const textShift = sectionProgress * maxTextShift;

    section1Logo.style.transform = `translateX(${-logoShift}px)`;
    section1Title.style.transform = `translateX(${textShift}px)`;
    section1Text.style.transform = `translateX(${textShift}px)`;
    animationFrame = null;
}

function requestSection1Update() {
    if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateSection1Position);
    }
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', requestSection1Update, { passive: true });
    window.addEventListener('resize', requestSection1Update);
    updateSection1Position();
}
