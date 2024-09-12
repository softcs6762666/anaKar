// Função básica para abrir uma imagem em um lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
  item.addEventListener('click', function () {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    img.src = this.src;
    lightbox.appendChild(img);

    lightbox.addEventListener('click', function () {
      lightbox.remove();
    });
  });
});