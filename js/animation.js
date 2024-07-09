// Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl")
const tr = document.querySelector("#grid__tr")
const bl = document.querySelector("#grid__bl")
const br = document.querySelector("#grid__br")

const tlBtn = document.querySelector("#grid__tl__btn")
const trBtn = document.querySelector("#grid__tr__btn")
const blBtn = document.querySelector("#grid__bl__btn")
const brBtn = document.querySelector("#grid__br__btn")

const tlContent = document.querySelector("#grid__tl__content")
const trContent = document.querySelector("#grid__tr__content")
const blContent = document.querySelector("#grid__bl__content")
const brContent = document.querySelector("#grid__br__content")

const projectOne = document.querySelector(".p-1")
const projectTwo = document.querySelector(".p-2")
const projectThree = document.querySelector(".p-3")

// Define colors and positions
const bgColor = "var(--bg)"
const bgColorAlt = "var(--bg-alt)"
const textColor = "var(--text)"
const textColorAlt = "var(--text-alt)"

let tlActive = "translateX(5vw) translateY(0)"
let tlHidden = "translateX(-100vw) translateY(-100vh)"

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)"

let blActive = "translateX(10vw) translateY(7vh)"
let blHidden = "translateX(-100vw) translateY(100vh)"

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)"

// Define corner that is open
let activeCorner = "";

// Add an event listener to the window object to listen for resize events 
window.addEventListener('resize', handleWindowResize);

// function that handles the styling when resizing window
function handleWindowResize() {
    // some code
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function

function playAnimation(animation, reverseAnimation) {
    // Do something with these values
}

function playClosingAnimation(animation, reverseAnimation) {
    // Do something with these values
}

// Onclick corner button functions
tlBtn.onclick = function() {
    if (activeCorner === "top-left") {
        playClosingAnimation()
    } else {
        trBtn.innerHTML = "Experience"
        blBtn.innerHTML = "Projects"
        brBtn.innerHTML = "Contact"

        // setting activeCorner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr; <br/> About"

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change background color
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change text color
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.textColorAlt = textColorAlt;

        // Change position of corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
}

trBtn.onclick = function() {
    if (activeCorner === "top-right") {
        playClosingAnimation()
    } else {
        tlBtn.innerHTML = "About"
        blBtn.innerHTML = "Projects"
        brBtn.innerHTML = "Contact"
        
        // setting activeCorner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr; <br/> About"

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change background color
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change text color
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.textColorAlt = textColorAlt;

        // Change position of corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
}

tlBtn.onclick = function() {
    if (activeCorner === "boottom-left") {
        playClosingAnimation()
    } else {
        tlBtn.innerHTML = "About"
        blBtn.innerHTML = "Projects"
        brBtn.innerHTML = "Contact"
        
        // setting activeCorner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr; <br/> About"

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change background color
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change text color
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.textColorAlt = textColorAlt;

        // Change position of corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
}

trBtn.onclick = function() {
    if (activeCorner === "top-right") {
        playClosingAnimation()
    } else {
        tlBtn.innerHTML = "About"
        blBtn.innerHTML = "Projects"
        brBtn.innerHTML = "Contact"
        
        // setting activeCorner
        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr; <br/> About"

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        // Change background color
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        // Change text color
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.textColorAlt = textColorAlt;

        // Change position of corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }
}
