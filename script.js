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
/* =========================
   PAGE RÉALISATIONS
========================= */

.realisation-header {
    background: #061b3a;
    color: white;
    text-align: center;
    padding: 70px 20px 55px;
}

.realisation-header > p:first-child {
    color: #ffc400;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.realisation-header h1 {
    font-size: 45px;
    margin-bottom: 15px;
}

.realisation-header .yellow-line {
    margin-bottom: 25px;
}

.realisation-header .intro {
    max-width: 700px;
    margin: auto;
    color: #e7e7e7;
    font-size: 18px;
    line-height: 1.6;
}


/* GALERIE */

.gallery-section {
    background: #f5f7fa;
    padding: 65px 7%;
}

.gallery {
    max-width: 1150px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 28px;
}

.gallery-item {
    position: relative;
    background: white;
    border-radius: 16px;
    overflow: hidden;

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);

    transition: transform 0.3s ease,
                box-shadow 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-7px);
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
}

.gallery-item img {
    width: 100%;
    height: 270px;

    display: block;

    object-fit: cover;

    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.06);
}


/* TEXTE SUR LES PHOTOS */

.gallery-caption {
    background: white;
    padding: 18px 20px;
}

.gallery-caption h3 {
    color: #071b38;
    font-size: 19px;
    margin-bottom: 7px;
}

.gallery-caption p {
    color: #666;
    font-size: 15px;
}


/* MOBILE */

@media (max-width: 768px) {

    .realisation-header {
        padding: 50px 20px 40px;
    }

    .realisation-header h1 {
        font-size: 34px;
    }

    .realisation-header .intro {
        font-size: 16px;
    }

    .gallery-section {
        padding: 45px 20px;
    }

    .gallery {
        grid-template-columns: 1fr;
        gap: 22px;
    }

    .gallery-item img {
        height: 240px;
    }
}
