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

    if (projet === "cuisine-gaz") {
        image.src = "cuisine-gaz.webp";
    }

    if (projet === "entretien-cuisiniere-gaz") {
        image.src = "entretien-cuisiniere-gaz.webp";
    }

    popup.hidden = false;
    popup.style.display = "flex";

 }
