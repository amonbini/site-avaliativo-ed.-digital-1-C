document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("Você clicou em uma imagem de " + img.alt);
        });
    });
});
