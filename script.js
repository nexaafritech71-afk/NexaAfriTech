const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}
function ouvrirProjet(projet) {
    const popup = document.getElementById("popup-projet");
    const image = document.getElementById("image-projet");

    if (projet === "electricite") {
        image.src = "electricite.png";
    }

    if (projet === "froid") {
        image.src = "froid.png";
    }

    if (projet === "climatisation") {
        image.src = "climatisation.png";
    }

    popup.style.display = "flex";
}

function fermerProjet() {
    const popup = document.getElementById("popup-projet");
    popup.style.display = "none";
}


