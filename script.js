/* =========================================================
   NEXA AFRITECH — SCRIPT.JS
   Version propre et consolidée
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. MENU MOBILE
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const ouvert = navLinks.classList.contains("show");

            menuToggle.setAttribute(
                "aria-expanded",
                ouvert ? "true" : "false"
            );

        });

        // Fermer le menu après avoir cliqué sur un lien
        const liensMenu = navLinks.querySelectorAll("a");

        liensMenu.forEach(function (lien) {

            lien.addEventListener("click", function () {
                navLinks.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });

    }


    /* =====================================================
       2. POPUP DES RÉALISATIONS
       ===================================================== */

    const popup = document.querySelector(".popup-projet");
    const popupImage = document.querySelector(".popup-contenu img");

    if (popup && popupImage) {

        /*
         * Fonction globale permettant au HTML
         * d'utiliser :
         *
         * onclick="ouvrirProjet('electricite')"
         *
         * ou
         *
         * onclick="ouvrirProjet('froid')"
         *
         * ou
         *
         * onclick="ouvrirProjet('climatisation')"
         */

        window.ouvrirProjet = function (projet) {

            let image = "";

            switch (projet) {

                case "electricite":
                    image = "electricite.webp";
                    break;

                case "froid":
                    image = "froid.webp";
                    break;

                case "climatisation":
                    image = "climatisation.webp";
                    break;

                default:
                    console.warn(
                        "Projet inconnu :",
                        projet
                    );
                    return;
            }

            popupImage.src = image;

            popupImage.alt =
                "Réalisation Nexa AfriTech - " + projet;

            popup.removeAttribute("hidden");

            popup.style.display = "flex";

            document.body.style.overflow = "hidden";
        };


        /* =================================================
           3. FERMER LE POPUP
           ================================================= */

        window.fermerProjet = function () {

            popup.setAttribute("hidden", "");

            popup.style.display = "none";

            popupImage.src = "";

            document.body.style.overflow = "";
        };


        /* =================================================
           4. BOUTON FERMER / RETOUR
           ================================================= */

        const boutonsFermer = document.querySelectorAll(
            ".popup-fermer, .popup-retour"
        );

        boutonsFermer.forEach(function (bouton) {

            bouton.addEventListener(
                "click",
                function () {
                    fermerProjet();
                }
            );

        });


        /* =================================================
           5. CLIQUER EN DEHORS DE L'IMAGE
           ================================================= */

        popup.addEventListener("click", function (event) {

            if (event.target === popup) {
                fermerProjet();
            }

        });


        /* =================================================
           6. TOUCHE ÉCHAP
           ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    !popup.hasAttribute("hidden")
                ) {
                    fermerProjet();
                }

            }
        );

    }


    /* =====================================================
       7. FERMETURE PROPRE SI UN LIEN D'ANCRAGE EST UTILISÉ
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(
        function (lien) {

            lien.addEventListener("click", function () {

                const cible = document.querySelector(
                    this.getAttribute("href")
                );

                if (cible) {

                    setTimeout(function () {

                        cible.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 50);

                }

            });

        }
    );


    /* =====================================================
       8. PROTECTION DU SCROLL APRÈS FERMETURE DU POPUP
       ===================================================== */

    window.addEventListener("pageshow", function () {

        document.body.style.overflow = "";

    });


    /* =====================================================
       9. LOG DE VÉRIFICATION
       ===================================================== */

    console.log(
        "Nexa AfriTech — script.js chargé correctement."
    );

});
