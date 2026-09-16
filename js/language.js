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
            story_subtitle: "Dos vidas que se encuentran por casualidad.",
            story_text:
                "Dos chicas llamadas Nana se encuentran en un tren rumbo a Tokio y sus vidas terminan cruzándose.",

            story_tokyo_label: "TOKYO",
            story_tokyo_title: "Dos Nanas",
            story_tokyo_text:
                "Nana Osaki y Nana Komatsu son dos jóvenes completamente diferentes que coinciden durante un viaje en tren hacia Tokio.",

            story_apartment_label: "APARTAMENTO 707",
            story_apartment_title: "Dos compañeras",
            story_apartment_text:
                "Después de encontrarse nuevamente en Tokio, ambas terminan compartiendo el apartamento 707 y comienzan una amistad inesperada.",

            story_blast_label: "MÚSICA",
            story_blast_title: "BLACK STONES",
            story_blast_text:
                "Nana Osaki busca abrirse camino como cantante junto a BLACK STONES y convertir su música en una oportunidad para triunfar en Tokio.",

            story_trapnest_label: "ÉXITO",
            story_trapnest_title: "TRAPNEST",
            story_trapnest_text:
                "TRAPNEST alcanza un enorme éxito mientras las relaciones entre sus miembros y las personas de su entorno se complican.",

            story_relationships_label: "RELACIONES",
            story_relationships_title: "Amor y amistad",
            story_relationships_text:
                "La música, el amor, la amistad y las decisiones personales terminan entrelazando las vidas de todos los personajes.",

            story_conflicts_label: "CONFLICTOS",
            story_conflicts_title: "Decisiones difíciles",
            story_conflicts_text:
                "A medida que las relaciones evolucionan, los personajes deben enfrentarse a decisiones que cambian sus vidas.",

            story_button: "Descubrir la historia",

            // FOOTER
            footer_text:
                "Fan website dedicado a NANA.",

            footer_navigation: "NAVEGACIÓN",
            footer_bands: "BANDAS",
            footer_copyright: "NANA Fan Website",

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

            board_protagonists: "Protagonistas",
            board_other: "Otros",

            character_view: "Ver",
            character_protagonist: "Protagonista",
            character_dreamer: "La soñadora",
            character_vocalist: "Vocalista",
            character_guitarist: "Guitarrista",
            character_bassist: "Bajista",
            character_drummer: "Batería",
            character_friend: "Amiga",
            character_artist_student: "Estudiante de arte",

            band_hero_title: "BLACK STONES",
            band_hero_tagline: "Punk. Dreams. Friendship.",
            band_intro_1: "BLACK STONES, también conocida como BLAST, es la banda formada alrededor de Nana Osaki y sus amigos.",
            band_intro_2: "Su música representa la personalidad rebelde de Nana y su deseo de conseguir una vida independiente.",
            band_member_vocal: "VOCAL",
            band_member_guitar: "GUITAR",
            band_member_drums: "DRUMS",
            band_member_bass: "BASS",

            trapnest_hero_title: "TRAPNEST",
            trapnest_hero_tagline: "Fame. Success. Contradictions.",
            trapnest_intro_1: "TRAPNEST es una de las bandas de rock más importantes de la historia y alcanza un enorme éxito dentro de la industria musical.",
            trapnest_intro_2: "Su popularidad contrasta con las relaciones personales y conflictos que existen detrás del escenario.",
            trapnest_member_guitar: "GUITAR",
            trapnest_member_bass: "BASS",
            trapnest_member_vocal: "VOCAL",
            trapnest_member_drums: "DRUMS",

            // CHARACTER ROLES
            role_vocalist: "Vocalista",
            role_guitarist: "Guitarrista",
            role_bassist: "Bajista",
            role_drummer: "Batería",
            role_guitarist_trapnest: "Guitarrista",
            role_vocalist_trapnest: "Vocalista",
            role_bassist_trapnest: "Bajista",
            role_drummer_trapnest: "Batería",

            character_role_nana_osaki: "Vocalista de BLACK STONES",
            character_description_nana_osaki: "Nana Osaki es la vocalista de BLACK STONES. Es una mujer fuerte, independiente y apasionada por la música. Su objetivo es triunfar con su banda en Tokio.",
            character_role_nana_komatsu: "La soñadora",
            character_description_nana_komatsu: "Nana Komatsu, conocida como Hachi, es una joven romántica que llega a Tokio buscando comenzar una nueva vida.",
            character_role_ren: "Guitarrista de TRAPNEST",
            character_description_ren: "Ren es el guitarrista de TRAPNEST y una de las personas más importantes en la vida de Nana Osaki.",
            character_role_yasu: "Batería de BLACK STONES",
            character_description_yasu: "Yasu es el batería de BLACK STONES. Es una persona tranquila y madura que suele actuar como apoyo para sus amigos.",
            character_role_nobu: "Guitarrista de BLACK STONES",
            character_description_nobu: "Nobu es guitarrista de BLACK STONES y uno de los amigos más cercanos de Nana Osaki.",
            character_role_shin: "Bajista de BLACK STONES",
            character_description_shin: "Shin es el joven bajista de BLACK STONES. A pesar de su edad, demuestra un gran talento musical.",
            character_role_takumi: "Bajista de TRAPNEST",
            character_description_takumi: "Takumi es el líder y bajista de TRAPNEST. Es una figura importante dentro de la industria musical.",
            character_role_reira: "Vocalista de TRAPNEST",
            character_description_reira: "Reira es la vocalista de TRAPNEST y posee una voz extraordinaria. Su vida personal está marcada por relaciones complejas.",
            character_role_naoki: "Batería de TRAPNEST",
            character_description_naoki: "Naoki es el batería de TRAPNEST y aporta una personalidad alegre al grupo.",
            character_role_junko: "Amiga de Nana Komatsu",
            character_description_junko: "Junko es una de las mejores amigas de Nana Komatsu y suele ofrecerle consejos cuando los necesita.",
            character_role_shoji: "Estudiante de arte",
            character_description_shoji: "Shoji es una persona importante durante una etapa de la vida de Nana Komatsu.",

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
            story_subtitle: "Two lives that meet by chance.",
            story_text:
                "Two girls named Nana meet on a train heading to Tokyo, and their lives become intertwined.",

            story_tokyo_label: "TOKYO",
            story_tokyo_title: "Two Nanas",
            story_tokyo_text:
                "Nana Osaki and Nana Komatsu are two completely different young women who meet during a train journey to Tokyo.",

            story_apartment_label: "APARTMENT 707",
            story_apartment_title: "Roommates",
            story_apartment_text:
                "After meeting again in Tokyo, they end up sharing apartment 707 and begin an unexpected friendship.",

            story_blast_label: "MUSIC",
            story_blast_title: "BLACK STONES",
            story_blast_text:
                "Nana Osaki tries to make her way as a singer with BLACK STONES and turn her music into an opportunity to succeed in Tokyo.",

            story_trapnest_label: "SUCCESS",
            story_trapnest_title: "TRAPNEST",
            story_trapnest_text:
                "TRAPNEST achieves enormous success while the relationships between its members and the people around them become complicated.",

            story_relationships_label: "RELATIONSHIPS",
            story_relationships_title: "Love and friendship",
            story_relationships_text:
                "Music, love, friendship and personal choices eventually intertwine the lives of all the characters.",

            story_conflicts_label: "CONFLICTS",
            story_conflicts_title: "Difficult decisions",
            story_conflicts_text:
                "As relationships evolve, the characters must face decisions that change their lives.",

            story_button: "Discover the story",

            // FOOTER
            footer_text:
                "Fan website dedicated to NANA.",

            footer_navigation: "NAVIGATION",
            footer_bands: "BANDS",
            footer_copyright: "NANA Fan Website",

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

            board_protagonists: "Protagonists",
            board_other: "Other",

            character_view: "View",
            character_protagonist: "Protagonist",
            character_dreamer: "The dreamer",
            character_vocalist: "Vocalist",
            character_guitarist: "Guitarist",
            character_bassist: "Bassist",
            character_drummer: "Drummer",
            character_friend: "Friend",
            character_artist_student: "Art student",

            band_hero_title: "BLACK STONES",
            band_hero_tagline: "Punk. Dreams. Friendship.",
            band_intro_1: "BLACK STONES, also known as BLAST, is the band formed around Nana Osaki and her friends.",
            band_intro_2: "Their music reflects Nana's rebellious personality and her desire to build an independent life.",
            band_member_vocal: "VOCAL",
            band_member_guitar: "GUITAR",
            band_member_drums: "DRUMS",
            band_member_bass: "BASS",

            trapnest_hero_title: "TRAPNEST",
            trapnest_hero_tagline: "Fame. Success. Contradictions.",
            trapnest_intro_1: "TRAPNEST is one of the most important rock bands in history and achieves enormous success in the music industry.",
            trapnest_intro_2: "Their popularity contrasts with the personal relationships and conflicts that exist behind the stage.",
            trapnest_member_guitar: "GUITAR",
            trapnest_member_bass: "BASS",
            trapnest_member_vocal: "VOCAL",
            trapnest_member_drums: "DRUMS",

            // CHARACTER ROLES
            role_vocalist: "Vocalist",
            role_guitarist: "Guitarist",
            role_bassist: "Bassist",
            role_drummer: "Drummer",
            role_guitarist_trapnest: "Guitarist",
            role_vocalist_trapnest: "Vocalist",
            role_bassist_trapnest: "Bassist",
            role_drummer_trapnest: "Drummer",

            character_role_nana_osaki: "BLACK STONES vocalist",
            character_description_nana_osaki: "Nana Osaki is the vocalist of BLACK STONES. She is strong, independent and passionate about music. Her goal is to succeed with her band in Tokyo.",
            character_role_nana_komatsu: "The dreamer",
            character_description_nana_komatsu: "Nana Komatsu, known as Hachi, is a romantic young woman who arrives in Tokyo looking for a new life.",
            character_role_ren: "TRAPNEST guitarist",
            character_description_ren: "Ren is TRAPNEST's guitarist and one of the most important people in Nana Osaki's life.",
            character_role_yasu: "BLACK STONES drummer",
            character_description_yasu: "Yasu is BLACK STONES' drummer. He is calm and mature, and often supports his friends.",
            character_role_nobu: "BLACK STONES guitarist",
            character_description_nobu: "Nobu is BLACK STONES' guitarist and one of Nana Osaki's closest friends.",
            character_role_shin: "BLACK STONES bassist",
            character_description_shin: "Shin is BLACK STONES' young bassist. Despite his age, he shows great musical talent.",
            character_role_takumi: "TRAPNEST bassist",
            character_description_takumi: "Takumi is TRAPNEST's leader and bassist. He is an important figure in the music industry.",
            character_role_reira: "TRAPNEST vocalist",
            character_description_reira: "Reira is TRAPNEST's vocalist and has an extraordinary voice. Her personal life is marked by complicated relationships.",
            character_role_naoki: "TRAPNEST drummer",
            character_description_naoki: "Naoki is TRAPNEST's drummer and brings a cheerful personality to the group.",
            character_role_junko: "Nana Komatsu's friend",
            character_description_junko: "Junko is one of Nana Komatsu's best friends and often gives her advice when she needs it.",
            character_role_shoji: "Art student",
            character_description_shoji: "Shoji is an important person during a chapter of Nana Komatsu's life.",

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

        window.nanaCurrentLanguage = language;


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

        window.dispatchEvent(new CustomEvent("nanaLanguageChanged", {
            detail: { language }
        }));

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

    window.nanaTranslations = translations;
    window.nanaCurrentLanguage = savedLanguage;

    changeLanguage(savedLanguage);

});