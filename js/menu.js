document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        return;
    }


    // ==========================================
    // ABRIR / CERRAR MENÚ
    // ==========================================

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });


    // ==========================================
    // CERRAR AL PULSAR UN ENLACE
    // ==========================================

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });


    // ==========================================
    // CERRAR AL HACER CLICK FUERA
    // ==========================================

    document.addEventListener("click", event => {

        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });


    // ==========================================
    // CERRAR CON ESC
    // ==========================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

});