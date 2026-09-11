// Hole den Button aus dem HTML
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Überprüfen, ob der Nutzer beim letzten Besuch schon den Dark Mode aktiv hatte (optional, aber cool: speichert die Einstellung)
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggleButton.textContent = '☀️';
}

// Wenn man auf den Button klickt...
themeToggleButton.addEventListener('click', () => {
    // Schalte die Klasse 'dark-mode' an oder aus
    body.classList.toggle('dark-mode');

    // Ändere das Icon je nach Modus
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️';
        // Speichere die Einstellung im Browser
        localStorage.setItem('darkMode', 'enabled');
    } else {
        themeToggleButton.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
});