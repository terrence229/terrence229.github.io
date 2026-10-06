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

// Builds the mailto link from reversed data-attributes at runtime, so the
// address never appears as plain text in the page source for scrapers/bots
// to pick up. Real visitors get a normal working link once the page loads.
document.addEventListener("DOMContentLoaded", function () {
    var emailLink = document.getElementById("email-link");
    var emailText = document.getElementById("email-text");

    if (!emailLink) {
        return;
    }

    var user = emailLink.dataset.user.split("").reverse().join("");
    var domain = emailLink.dataset.domain.split("").reverse().join("");
    var address = user + "@" + domain;

    emailLink.href = "mailto:" + address;
    if (emailText) {
        emailText.textContent = address;
    }
});
