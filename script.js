// Shows/hides the sidebar navigation on mobile. On desktop the
// nav-toggle button is hidden by CSS and this script has nothing to do.
document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        toggle.textContent = isOpen ? "✕ Menu" : "☰ Menu";
    });
});
