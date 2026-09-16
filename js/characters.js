document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTOS
    // ==========================================

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const characters =
        document.querySelectorAll(".character-profile");

    const modal =
        document.getElementById("characterModal");

    const modalImage =
        document.getElementById("modalCharacterImage");

    const modalRole =
        document.getElementById("modalCharacterRole");

    const modalName =
        document.getElementById("modalCharacterName");

    const modalDescription =
        document.getElementById("modalCharacterDescription");

    const modalClose =
        document.querySelector(".modal-close");


    // Si no estamos en la página de personajes
    if (!characters.length) {
        return;
    }


    // ==========================================
    // FILTROS
    // ==========================================

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            // Activar botón
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            // Filtrar personajes
            characters.forEach(character => {

                const category =
                    character.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    character.classList.remove("hidden");

                } else {

                    character.classList.add("hidden");

                }

            });

        });

    });


    // ==========================================
    // DATOS DE PERSONAJES
    // ==========================================

    const characterData = {

        nana_osaki: {

            name: "Nana Osaki",

            role: "Vocalista de BLACK STONES",

            image: "../assets/images/characters/nana-osaki.jpg",

            description:
                "Nana Osaki es la vocalista de BLACK STONES. Es una mujer fuerte, independiente y apasionada por la música. Su objetivo es triunfar con su banda en Tokio."
        },


        nana_komatsu: {

            name: "Nana Komatsu",

            role: "La soñadora",

            image: "../assets/images/characters/nana-komatsu.jpg",

            description:
                "Nana Komatsu, conocida como Hachi, es una joven romántica que llega a Tokio buscando comenzar una nueva vida."
        },


        ren: {

            name: "Ren Honjo",

            role: "Guitarrista de TRAPNEST",

            image: "../assets/images/characters/ren.jpg",

            description:
                "Ren es el guitarrista de TRAPNEST y una de las personas más importantes en la vida de Nana Osaki."
        },


        yasu: {

            name: "Yasu Takagi",

            role: "Batería de BLACK STONES",

            image: "../assets/images/characters/yasu.jpg",

            description:
                "Yasu es el batería de BLACK STONES. Es una persona tranquila y madura que suele actuar como apoyo para sus amigos."
        },


        nobu: {

            name: "Nobu Terashima",

            role: "Guitarrista de BLACK STONES",

            image: "../assets/images/characters/nobu.jpg",

            description:
                "Nobu es guitarrista de BLACK STONES y uno de los amigos más cercanos de Nana Osaki."
        },


        shin: {

            name: "Shinichi Okazaki",

            role: "Bajista de BLACK STONES",

            image: "../assets/images/characters/shin.jpg",

            description:
                "Shin es el joven bajista de BLACK STONES. A pesar de su edad, demuestra un gran talento musical."
        },


        takumi: {

            name: "Takumi Ichinose",

            role: "Bajista de TRAPNEST",

            image: "../assets/images/characters/takumi.jpg",

            description:
                "Takumi es el líder y bajista de TRAPNEST. Es una figura importante dentro de la industria musical."
        },


        reira: {

            name: "Reira Serizawa",

            role: "Vocalista de TRAPNEST",

            image: "../assets/images/characters/reira.jpg",

            description:
                "Reira es la vocalista de TRAPNEST y posee una voz extraordinaria. Su vida personal está marcada por relaciones complejas."
        },


        naoki: {

            name: "Naoki Fujieda",

            role: "Batería de TRAPNEST",

            image: "../assets/images/characters/naoki.jpg",

            description:
                "Naoki es el batería de TRAPNEST y aporta una personalidad alegre al grupo."
        },


        junko: {

            name: "Junko Saotome",

            role: "Amiga de Nana Komatsu",

            image: "../assets/images/characters/junko.jpg",

            description:
                "Junko es una de las mejores amigas de Nana Komatsu y suele ofrecerle consejos cuando los necesita."
        },


        shoji: {

            name: "Shoji Endo",

            role: "Estudiante de arte",

            image: "../assets/images/characters/shoji.jpg",

            description:
                "Shoji es una persona importante durante una etapa de la vida de Nana Komatsu."
        }

    };


    // ==========================================
    // ABRIR MODAL
    // ==========================================

    const characterCards =
        document.querySelectorAll("[data-character]");

    characterCards.forEach(card => {

        card.addEventListener("click", () => {

            const characterId =
                card.dataset.character;

            const character =
                characterData[characterId];

            if (!character || !modal) {
                return;
            }


            modalImage.src = character.image;
            modalImage.alt = character.name;

            modalName.textContent =
                character.name;

            modalRole.textContent =
                character.role;

            modalDescription.textContent =
                character.description;


            modal.classList.add("active");

            document.body.classList.add("modal-open");

        });

    });


    // ==========================================
    // CERRAR MODAL
    // ==========================================

    function closeModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    // ==========================================
    // CLICK EN EL FONDO
    // ==========================================

    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    // ==========================================
    // ESC
    // ==========================================

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    });

});