const navbarNav = document.querySelector("#navbarNav");

const nav_link = document.querySelectorAll(".nav-link");

const navbar_toggler = document.querySelector(".navbar-toggler");

nav_link.forEach((link) => {
    link.addEventListener("click", () => {
        nav_link.forEach((l) => {
            l.classList.remove("active");
        });
        link.classList.add("active");

        navbarNav.classList.remove("show");
        navbar_toggler.classList.add("collapsed");
        navbar_toggler.attributes["aria-expanded"].value = "false";
    });
});
