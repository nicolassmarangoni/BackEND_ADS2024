document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleSlidesOnly'), {
        interval: 2000, // Tempo em milissegundos
        wrap: true // Para voltar ao primeiro item
    });
});
