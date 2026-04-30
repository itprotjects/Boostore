document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-change');
    const themeLink = document.querySelector('#theme-link');

    // check if theme was already saved
    const savedTheme = localStorage.getItem('theme');


    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme);
    }

    themeBtn.addEventListener('click', () => {
        let currentTheme = themeLink.getAttribute('href');
        let newTheme;

        if (currentTheme === 'css/Boostore.css') { //if theme is light mode
            newTheme = 'css/dark-mode.css';
        } else { //if theme is not light mode 
            newTheme = 'css/Boostore.css';
        }

        // implement the new theme and save the choice to localStorage
        themeLink.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});




