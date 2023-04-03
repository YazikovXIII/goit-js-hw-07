import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */



const galleryBox = document.querySelector('.gallery');

const elArr = galleryItems.map(item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join('');

galleryBox.insertAdjacentHTML('beforeend', elArr);

galleryBox.addEventListener('click', onClick)


function onClick(evt) {
    evt.preventDefault()

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const src = evt.target.dataset.source
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${src}">
	`);

    instance.show()

    document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
    instance.close();
     }
    });
}