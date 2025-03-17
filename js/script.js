// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Gestion du changement de thème
    const themeBtn = document.querySelector('#theme-btn');
    const themeStyle = document.querySelector('#theme-style');
    const themes = ['/css/style1.css', '/css/style2.css', '/css/style3.css'];
    let currentThemeIndex = 0;

    // Style du bouton
    themeBtn.style.position = 'fixed';
    themeBtn.style.bottom = '40px';
    themeBtn.style.right = '20px';
    themeBtn.style.padding = '10px 20px';
    themeBtn.style.border = 'none';
    themeBtn.style.borderRadius = '5px';
    themeBtn.style.cursor = 'pointer';
    themeBtn.style.zIndex = '2000';
    themeBtn.style.transition = 'background-color 0.3s ease';

    // Survol : aperçu temporaire du thème suivant
    themeBtn.addEventListener('mouseover', () => {
        const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
        themeStyle.setAttribute('href', themes[nextThemeIndex]);
    });

    themeBtn.addEventListener('mouseout', () => {
        themeStyle.setAttribute('href', themes[currentThemeIndex]);
    });

    // Clic : changement permanent
    themeBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        themeStyle.setAttribute('href', themes[currentThemeIndex]);
    });
});