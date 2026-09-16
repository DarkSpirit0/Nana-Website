document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ANIMACIONES REVEAL
    // ==========================================

    const revealElements =
        document.querySelectorAll(".reveal");

    if (!revealElements.length) {
        return;
    }


    // Comprobar compatibilidad
    if (!("IntersectionObserver" in window)) {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

        return;
    }


    // ==========================================
    // INTERSECTION OBSERVER
    // ==========================================

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {
        observer.observe(element);
    });


    // ==========================================
    // PARALLAX
    // ==========================================

    const parallaxElements =
        document.querySelectorAll(
            ".featured-background, .music-background"
        );


    if (parallaxElements.length) {

        window.addEventListener("scroll", () => {

            const scrollPosition =
                window.scrollY;

            parallaxElements.forEach(element => {

                const rect =
                    element.getBoundingClientRect();

                const speed = 0.15;

                if (
                    rect.bottom >= 0 &&
                    rect.top <= window.innerHeight
                ) {

                    const offset =
                        scrollPosition * speed;

                    element.style.transform =
                        `translateY(${offset}px)`;

                }

            });

        });

    }

});