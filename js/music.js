document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // COMPROBAR PÁGINA DE MÚSICA
    // ==========================================

    const musicPage =
        document.querySelector(".music-page");

    if (!musicPage) {
        return;
    }


    // ==========================================
    // FILTROS DE MÚSICA
    // ==========================================

    const filterButtons =
        document.querySelectorAll(".music-filter");

    const songs =
        document.querySelectorAll(".song-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            // Activar botón
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            // Mostrar canciones
            songs.forEach(song => {

                const group =
                    song.dataset.group;

                if (
                    filter === "all" ||
                    group === filter
                ) {

                    song.classList.remove("hidden");

                } else {

                    song.classList.add("hidden");

                }

            });

        });

    });


    // ==========================================
    // BOTONES DE REPRODUCCIÓN
    // ==========================================

    const playButtons =
        document.querySelectorAll(".music-play");


    playButtons.forEach(button => {

        button.addEventListener("click", () => {

            const videoId =
                button.dataset.video;

            if (!videoId) {
                return;
            }


            const player =
                document.getElementById("musicPlayer");

            if (!player) {
                return;
            }


            player.src =
                `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            player.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    });


    // ==========================================
    // DETENER YOUTUBE
    // ==========================================

    const stopButton =
        document.getElementById("stopMusic");

    if (stopButton) {

        stopButton.addEventListener("click", () => {

            const player =
                document.getElementById("musicPlayer");

            if (player) {
                player.src = "";
            }

        });

    }

});