// Define DOM elements 
const toggleButton = document.querySelector("#toggle-button")
const root = document.querySelector(":root")
const storageKey = "color-mode"
const defaultMode = "light-mode"

// load the user's preffered color mode from local storage

function loadColorMode() {
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    updateTooggleButton();
}

loadColorMode();

// Toggle the color mode
toggleButton.addEventListener('click', () => {
    saveColorMode();
});

// Save the user's preffered color mode to local storage
function saveColorMode() {
    // check if the root element has a class of 'dark-mode'. if yes, then the current node is switched to light, and vice versa
    const currentMode = root.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
    root.classList.remove('light-mode', 'dark-mode');
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    updateTooggleButton();
}

function updateTooggleButton() {
    if (root.classList.contains('dark-mode')) {
        toggleButton.style.backgroundImage = 'var(--moon)';
    } else {
        toggleButton.style.backgroundImage = 'var(--sun)'
    }
}

