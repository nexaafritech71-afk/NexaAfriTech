 const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

menuToggle.addEventListener("click", function () {  
    const isOpen = navLinks.classList.toggle("show");  
    menuToggle.setAttribute("aria-expanded", String(isOpen));  
});  

const links = navLinks.querySelectorAll("a");  

links.forEach(function (link) {  
    link.addEventListener("click", function () {  
        navLinks.classList.remove("show");  
        menuToggle.setAttribute("aria-expanded", "false");  
    });  
});

}
function ouvrirProjet(projet) {
const popup = document.getElementById("popup-projet");
const image = document.getElementById("image-projet");

if (projet === "electricite") {  
    image.src = "electricite.webp";  
}  

if (projet === "froid") {  
    image.src = "froid.webp";  
}  

if (projet === "climatisation") {  
    image.src = "climatisation.webp";  
}  

popup.hidden = false;  
popup.style.display = "flex";

}
function ouvrirProjet(projet) {

    const popup = document.getElementById("popup-projet");
    const image = document.getElementById("image-projet");

    if (projet === "electricite") {
        image.src = "electricite.webp";
    }

    if (projet === "froid") {
        image.src = "froid.webp";
    }

    if (projet === "climatisation") {
        image.src = "climatisation.webp";
    }

    if (projet === "electricite2") {
        image.src = "electricite2.webp";
    }

    if (projet === "froid2") {
        image.src = "Froid2.webp";
    }

    if (projet === "climatisation2") {
        image.src = "climatisation2.webp";
    }

    if (projet === "cuisine-gaz") {
        image.src = "cuisine-gaz.webp";
    }

    if (projet === "entretien-cuisiniere-gaz") {
        image.src = "entretien-cuisiniere-gaz.webp";
    }

 if (projet === "courant-fort") {
    image.src = "courant-fort.webp";
}

if (projet === "courant-faible") {
    image.src = "courant-faible.webp";
}

    popup.hidden = false;
    popup.style.display = "flex";

}


function fermerProjet() {

    const popup = document.getElementById("popup-projet");

    popup.style.display = "none";
    popup.hidden = true;

}


/* Fermeture avec la touche Échap */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        fermerProjet();
    }

});


/* Fermeture en cliquant sur l'arrière-plan */

const popupProjet = document.getElementById("popup-projet");

if (popupProjet) {

    popupProjet.addEventListener("click", function (event) {

        if (event.target === popupProjet) {
            fermerProjet();
        }

    });

}
  
