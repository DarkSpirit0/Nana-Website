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

    const fallbackVideoIds = [
        "M7lc1UVf-VE",
        "aqz-KE-bpKQ",
        "ScMzIvxBSi4",
        "ysz5S6PUM-U",
        "dQw4w9WgXcQ",
        "fJ9rUzIMcZQ",
        "2Vv-BfVoR4g"
    ];

    const allVideoIds =
        [...playButtons].map(button =>
            button.dataset.video
        ).filter(Boolean);

    const safeVideoIds =
        allVideoIds.length ? allVideoIds : fallbackVideoIds;

    let currentVideoIndex = -1;

    function loadVideo(videoIndex) {

        if (!safeVideoIds.length) {
            return;
        }

        const videoId = safeVideoIds[videoIndex];

        if (!videoId) {
            return;
        }

        const player =
            document.getElementById("musicPlayer");

        if (!player) {
            return;
        }

        player.src =
            `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`;

        currentVideoIndex = videoIndex;

        player.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

    playButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            loadVideo(index);

        });

    });


    // ==========================================
    // CONTROLES DEL REPRODUCTOR
    // ==========================================

    const playerControls =
        document.querySelectorAll("[data-player-action]");

    playerControls.forEach(control => {

        control.addEventListener("click", () => {

            const action =
                control.dataset.playerAction;

            if (!safeVideoIds.length) {
                return;
            }

            if (action === "prev") {
                const nextIndex =
                    currentVideoIndex <= 0
                        ? safeVideoIds.length - 1
                        : currentVideoIndex - 1;

                loadVideo(nextIndex);
            }

            if (action === "next") {
                const nextIndex =
                    currentVideoIndex >= safeVideoIds.length - 1
                        ? 0
                        : currentVideoIndex + 1;

                loadVideo(nextIndex);
            }

            if (action === "pause") {
                const player =
                    document.getElementById("musicPlayer");

                if (player) {
                    player.src = "";
                    currentVideoIndex = -1;
                }
            }

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
                currentVideoIndex = -1;
            }

        });

    }

});