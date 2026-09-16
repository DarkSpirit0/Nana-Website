document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // TRADUCCIONES
    // ==========================================

    const translations = {

        es: {

            // NAV
            home: "Inicio",
            characters: "Personajes",
            story: "Historia",
            music: "Música",
            black_stones: "BLACK STONES",
            trapnest: "TRAPNEST",

            // HERO
            hero_subtitle: "DOS CHICAS. UNA HISTORIA.",
            hero_button: "Explorar",
            scroll: "Desliza para descubrir",

            // INTRO
            intro_title: "Dos Nanas",
            nana_osaki_role: "Vocalista de BLACK STONES",
            nana_komatsu_role: "La soñadora",

            nana_osaki_description:
                "Una cantante punk decidida a triunfar en Tokio sin renunciar a sus sueños.",

            nana_komatsu_description:
                "Una joven romántica que busca comenzar una nueva vida junto a la persona que ama.",

            // APARTMENT
            apartment_title: "Apartamento 707",
            apartment_text:
                "Dos desconocidas. Dos vidas completamente diferentes. Un apartamento que cambiará sus vidas para siempre.",

            // BANDS
            bands_title: "Dos bandas. Dos mundos.",

            blast_title: "BLACK STONES",
            blast_text:
                "Punk, rebeldía y una amistad marcada por los sueños.",

            trapnest_title: "TRAPNEST",
            trapnest_text:
                "Éxito, fama y una vida llena de contradicciones.",

            // CHARACTERS
            characters_title: "Personajes",
            view_character: "Ver personaje",

            // MUSIC
            music_title: "Música",
            music_text:
                "La música es una parte esencial de la historia de NANA.",
            music_button: "Explorar música",

            // STORY
            story_title: "La historia",
            story_text:
                "Dos chicas llamadas Nana se encuentran en un tren rumbo a Tokio y sus vidas terminan cruzándose.",

            story_button: "Descubrir la historia",

            // FOOTER
            footer_text:
                "Fan website dedicado a NANA.",

            disclaimer:
                "Proyecto personal y no comercial. NANA y sus personajes pertenecen a sus respectivos propietarios.",

            // CHARACTER PAGE
            characters_page_title: "PERSONAJES",
            characters_page_subtitle:
                "Conoce a los personajes que forman parte de esta historia.",

            filter_all: "Todos",
            filter_protagonists: "Protagonistas",
            filter_blast: "BLACK STONES",
            filter_trapnest: "TRAPNEST",
            filter_other: "Otros",

            // CHARACTER ROLES
            role_vocalist: "Vocalista",
            role_guitarist: "Guitarrista",
            role_bassist: "Bajista",
            role_drummer: "Batería",
            role_guitarist_trapnest: "Guitarrista",
            role_vocalist_trapnest: "Vocalista",
            role_bassist_trapnest: "Bajista",
            role_drummer_trapnest: "Batería",

            music_page_title: "MÚSICA",
            music_page_subtitle: "Dos bandas. Dos voces. Una historia.",
            music_label: "EL SONIDO DE NANA",
            music_intro_title: "La música de NANA",
            music_intro_text: "La música es una parte fundamental de NANA. BLACK STONES y TRAPNEST representan dos estilos, dos mundos y dos formas diferentes de entender la vida.",
            music_filter_all: "TODAS",
            music_filter_blast: "BLACK STONES",
            music_filter_trapnest: "TRAPNEST",
            player_label: "NANA PLAYER",
            player_title: "Reproductor",
            player_stop: "Detener",
            player_placeholder: "Selecciona una canción para comenzar.",
            opening_1: "OPENING 01",
            opening_2: "OPENING 02",
            opening_3: "OPENING 03",
            ending_1: "ENDING 01",
            ending_2: "ENDING 02",
            ending_3: "ENDING 03",
            ending_4: "ENDING 04",
            music_quote: "La música conecta a las personas incluso cuando sus vidas parecen estar completamente separadas.",
            footer_navigation: "Navegación",   

            // LANGUAGE
            spanish: "ES",
            english: "EN"
        },


        en: {

            // NAV
            home: "Home",
            characters: "Characters",
            story: "Story",
            music: "Music",
            black_stones: "BLACK STONES",
            trapnest: "TRAPNEST",

            // HERO
            hero_subtitle: "TWO GIRLS. ONE STORY.",
            hero_button: "Explore",
            scroll: "Scroll to discover",

            // INTRO
            intro_title: "Two Nanas",
            nana_osaki_role: "BLACK STONES vocalist",
            nana_komatsu_role: "The dreamer",

            nana_osaki_description:
                "A determined punk singer trying to make her dreams come true in Tokyo.",

            nana_komatsu_description:
                "A romantic young woman looking for a new life alongside the person she loves.",

            // APARTMENT
            apartment_title: "Apartment 707",
            apartment_text:
                "Two strangers. Two completely different lives. One apartment that will change their lives forever.",

            // BANDS
            bands_title: "Two bands. Two worlds.",

            blast_title: "BLACK STONES",
            blast_text:
                "Punk, rebellion and a friendship shaped by dreams.",

            trapnest_title: "TRAPNEST",
            trapnest_text:
                "Success, fame and a life full of contradictions.",

            // CHARACTERS
            characters_title: "Characters",
            view_character: "View character",

            // MUSIC
            music_title: "Music",
            music_text:
                "Music is an essential part of NANA's story.",
            music_button: "Explore music",

            // STORY
            story_title: "The story",
            story_text:
                "Two girls named Nana meet on a train heading to Tokyo, and their lives become intertwined.",

            story_button: "Discover the story",

            // FOOTER
            footer_text:
                "Fan website dedicated to NANA.",

            disclaimer:
                "Personal non-commercial project. NANA and its characters belong to their respective owners.",

            // CHARACTER PAGE
            characters_page_title: "CHARACTERS",
            characters_page_subtitle:
                "Meet the characters who are part of this story.",

            filter_all: "All",
            filter_protagonists: "Protagonists",
            filter_blast: "BLACK STONES",
            filter_trapnest: "TRAPNEST",
            filter_other: "Other",

            // CHARACTER ROLES
            role_vocalist: "Vocalist",
            role_guitarist: "Guitarist",
            role_bassist: "Bassist",
            role_drummer: "Drummer",
            role_guitarist_trapnest: "Guitarist",
            role_vocalist_trapnest: "Vocalist",
            role_bassist_trapnest: "Bassist",
            role_drummer_trapnest: "Drummer",

            music_page_title: "MUSIC",
            music_page_subtitle: "Two bands. Two voices. One story.",
            music_label: "THE SOUND OF NANA",
            music_intro_title: "The Music of NANA",
            music_intro_text: "Music is a fundamental part of NANA. BLACK STONES and TRAPNEST represent two styles, two worlds and two different ways of understanding life.",
            music_filter_all: "ALL",
            music_filter_blast: "BLACK STONES",
            music_filter_trapnest: "TRAPNEST",
            player_label: "NANA PLAYER",
            player_title: "Player",
            player_stop: "Stop",
            player_placeholder: "Select a song to start.",
            opening_1: "OPENING 01",
            opening_2: "OPENING 02",
            opening_3: "OPENING 03",
            ending_1: "ENDING 01",
            ending_2: "ENDING 02",
            ending_3: "ENDING 03",
            ending_4: "ENDING 04",
            music_quote: "Music connects people even when their lives seem completely separate.",
            footer_navigation: "Navigation",

            // LANGUAGE
            spanish: "ES",
            english: "EN"
        }

    };


    // ==========================================
    // CAMBIAR IDIOMA
    // ==========================================

    function changeLanguage(language) {

        if (!translations[language]) {
            return;
        }

        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach(element => {

            const key = element.dataset.i18n;

            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }

        });


        // Actualizar idioma HTML
        document.documentElement.lang = language;


        // Guardar idioma
        localStorage.setItem("nanaLanguage", language);


        // Actualizar botones
        const languageButtons =
            document.querySelectorAll("[data-language]");

        languageButtons.forEach(button => {

            button.classList.remove("active");

            if (button.dataset.language === language) {
                button.classList.add("active");
            }

        });

    }


    // ==========================================
    // BOTONES ES / EN
    // ==========================================

    const languageButtons =
        document.querySelectorAll("[data-language]");

    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.language;

            changeLanguage(language);

        });

    });


    // ==========================================
    // IDIOMA GUARDADO
    // ==========================================

    const savedLanguage =
        localStorage.getItem("nanaLanguage") || "es";

    changeLanguage(savedLanguage);

});