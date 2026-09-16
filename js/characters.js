document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTOS
    // ==========================================

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const characterBoards =
        document.querySelectorAll(".character-board");

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

            characterBoards.forEach(board => {
                const matches =
                    filter === "all"
                        ? board.dataset.board === "all"
                        : board.dataset.board === filter;

                board.classList.toggle("hidden", !matches);
            });

            characters.forEach(character => {
                const board = character.closest(".character-board");
                const categories =
                    character.dataset.category?.split(" ") || [];
                const matches =
                    filter === "all" ||
                    categories.includes(filter);

                character.classList.toggle("hidden", !matches);
            });

        });

    });


    // ==========================================
    // DATOS DE PERSONAJES
    // ==========================================

    const characterData = {

        nana_osaki: {

            name: "Nana Osaki",

            roleKey: "character_role_nana_osaki",

            image: "../assets/images/characters/nana-osaki.jpg",

            descriptionKey: "character_description_nana_osaki"
        },


        nana_komatsu: {

            name: "Nana Komatsu",

            roleKey: "character_role_nana_komatsu",

            image: "../assets/images/characters/nana-komatsu.jpg",

            descriptionKey: "character_description_nana_komatsu"
        },


        ren: {

            name: "Ren Honjo",

            roleKey: "character_role_ren",

            image: "../assets/images/characters/ren.jpg",

            descriptionKey: "character_description_ren"
        },


        yasu: {

            name: "Yasu Takagi",

            roleKey: "character_role_yasu",

            image: "../assets/images/characters/yasu.jpg",

            descriptionKey: "character_description_yasu"
        },


        nobu: {

            name: "Nobu Terashima",

            roleKey: "character_role_nobu",

            image: "../assets/images/characters/nobu.jpg",

            descriptionKey: "character_description_nobu"
        },


        shin: {

            name: "Shinichi Okazaki",

            roleKey: "character_role_shin",

            image: "../assets/images/characters/shin.jpg",

            descriptionKey: "character_description_shin"
        },


        takumi: {

            name: "Takumi Ichinose",

            roleKey: "character_role_takumi",

            image: "../assets/images/characters/takumi.jpg",

            descriptionKey: "character_description_takumi"
        },


        reira: {

            name: "Reira Serizawa",

            roleKey: "character_role_reira",

            image: "../assets/images/characters/reira.jpg",

            descriptionKey: "character_description_reira"
        },


        naoki: {

            name: "Naoki Fujieda",

            roleKey: "character_role_naoki",

            image: "../assets/images/characters/naoki.jpg",

            descriptionKey: "character_description_naoki"
        },


        junko: {

            name: "Junko Saotome",

            roleKey: "character_role_junko",

            image: "../assets/images/characters/junko.jpg",

            descriptionKey: "character_description_junko"
        },


        shoji: {

            name: "Shoji Endo",

            roleKey: "character_role_shoji",

            image: "../assets/images/characters/shoji.jpg",

            descriptionKey: "character_description_shoji"
        }

    };

    let activeCharacter = null;

    function updateModalLanguage() {

        if (!activeCharacter) {
            return;
        }

        const language = window.nanaCurrentLanguage || "es";
        const translations = window.nanaTranslations || {};
        const currentTranslations = translations[language] || translations.es || {};

        modalRole.textContent =
            currentTranslations[activeCharacter.roleKey] || "";

        modalDescription.textContent =
            currentTranslations[activeCharacter.descriptionKey] || "";

    }

    window.addEventListener("nanaLanguageChanged", updateModalLanguage);


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

            activeCharacter = character;

            modalName.textContent =
                character.name;
            updateModalLanguage();


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