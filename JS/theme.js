// الجزء ده مخصوص عشان يغير ال ثيم بتاع الصفحة و يحفظ انهي لون مختار
// استنى لغاية ما الصفحة تحمل بعدين اشتغل
document.addEventListener('DOMContentLoaded', () => {
    // ياخد ال هي دي و الكلاس
    const themeBtn = document.querySelector('.theme-change');
    const themeLink = document.querySelector('#theme-link');
    // check if theme was already saved
    const savedTheme = localStorage.getItem('theme'); // يستدع أو يخذن
// يتأكد انه مش NULL
    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme); // غير ال css file
    }
// لما يدوس اشتغل
    themeBtn.addEventListener('click', () => {
        let currentTheme = themeLink.getAttribute('href'); // يقرأ الفايل الشغال
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