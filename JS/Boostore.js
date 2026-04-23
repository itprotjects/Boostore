document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-change');
    const themeLink = document.querySelector('#theme-link');

    themeBtn.addEventListener('click', () => {
        // Check what the current file is
        if (themeLink.getAttribute('href') === 'css/Boostore.css') {
            // Switch to dark mode
            themeLink.setAttribute('href', 'css/dark-mode.css');
        } else {
            // Switch back to light mode
            themeLink.setAttribute('href', 'css/Boostore.css');
        }
    });
});