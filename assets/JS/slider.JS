document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleIndicators"), {
      interval: 5000,
      pause: false,
    });

    // Gestion des boutons "Previous" et "Next"
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    prevButton.addEventListener("click", () => {
      carousel.prev();
    });

    nextButton.addEventListener("click", () => {
      carousel.next();
    });
  });
