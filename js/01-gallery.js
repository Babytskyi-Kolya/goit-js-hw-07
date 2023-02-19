import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
containerGallery.addEventListener('click', onClickShowOriginalImage)


const listItemsMarkup = createItemGalere(galleryItems);
containerGallery.innerHTML = listItemsMarkup;

function createItemGalere (items){
   return items.map(({preview, original, description}) =>{
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
   }).join('');
}

function onClickShowOriginalImage (evt){
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')){
        return;
    };
    
    const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="auto">`,
    {
    onShow: () => document.addEventListener("keydown", onCloseImage),
    onClose: () => document.removeEventListener("keydown", onCloseImage),
    }
    );
    instance.show()
    function onCloseImage (event) {
        if(event.code === 'Escape'){
        instance.close();
        }
    };
}


