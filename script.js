

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", function() {
            // Vaihtaa active-luokan päälle ja pois klikatessa
            hamburgerBtn.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
});