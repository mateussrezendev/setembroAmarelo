// script.js

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-button');
    const imgDiurno = document.getElementById('image-diurno');
    const imgNoturno = document.getElementById('image-noturno');
    const body = document.body;
    const themeLink = document.getElementById('theme-link');

    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        imgDiurno.classList.add('hidden');
        imgNoturno.classList.remove('hidden');
        themeLink.href = './css/dark-mode.css';
    } else {
        body.classList.remove('dark-mode');
        imgDiurno.classList.remove('hidden');
        imgNoturno.classList.add('hidden');
        themeLink.href = './css/style.css';
    }

    // Alterna o tema e as imagens quando o botão é clicado
    button.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            imgDiurno.classList.remove('hidden');
            imgNoturno.classList.add('hidden');
            themeLink.href = './css/style.css';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            imgDiurno.classList.add('hidden');
            imgNoturno.classList.remove('hidden');
            themeLink.href = './css/dark-mode.css';
            localStorage.setItem('theme', 'dark');
        }
    });
});
