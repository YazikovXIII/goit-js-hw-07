import { galleryItems } from './gallery-items.js';
// Change code below this line



{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */}

const galleryBox = document.querySelector('.gallery');

const elArr = galleryItems.map(item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`).join('');

galleryBox.insertAdjacentHTML('beforeend', elArr);

const someGallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 1,
});