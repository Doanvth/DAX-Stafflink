function activateTab(element) {
        var allTabs = document.querySelectorAll('.nav-link');
        allTabs.forEach(tab => tab.classList.remove('active'));
        element.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
        var navbarToggler = document.querySelector(".navbar-toggler");
        var navbarCollapse = document.querySelector(".navbar-collapse");
        var overlay = document.getElementById("overlay");

        navbarToggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
            overlay.classList.toggle("active");
        });
        document.addEventListener("click", function (event) {
            if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
                navbarCollapse.classList.remove("show");
                overlay.classList.remove("active");
            }
        });
        overlay.addEventListener("click", function () {
            navbarCollapse.classList.remove("show");
            overlay.classList.remove("active");
        });
    });