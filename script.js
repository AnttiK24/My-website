

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", function() {
            
            hamburgerBtn.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
});
