document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded!"); // This will help us debug
    const langEnButton = document.getElementById("lang-en");
    const langEsButton = document.getElementById("lang-es");

    if (!langEnButton || !langEsButton) {
        console.error("Buttons not found!"); // Debugging help
        return;
    }

    langEnButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("English button clicked"); // Debugging help
        toggleLanguage('en');
    });

    langEsButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Spanish button clicked"); // Debugging help
        toggleLanguage('es');
    });

    function toggleLanguage(lang) {
        console.log("Toggling language to:", lang); // Debugging help
        const langEnElements = document.querySelectorAll('.lang-en');
        const langEsElements = document.querySelectorAll('.lang-es');

        if (lang === 'en') {
            langEnElements.forEach(el => el.style.display = 'block');
            langEsElements.forEach(el => el.style.display = 'none');
        } else if (lang === 'es') {
            langEnElements.forEach(el => el.style.display = 'none');
            langEsElements.forEach(el => el.style.display = 'block');
        }
    }
});