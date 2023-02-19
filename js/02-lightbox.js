import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
const listItemsMarkup = createItemGalere(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", listItemsMarkup);
containerGallery.addEventListener('click', onClickShowOriginalImage)

function createItemGalere (items){
    return items.map(({preview, original, description}) =>{
     return `<li class="gallery__item">
     <a  href="${original}">
     <img class="gallery__image" src="${preview}" 
     alt="${description}" />
   </a>
   </li>`
    }).join('');
 }
 
 function onClickShowOriginalImage (evt){
    evt.preventDefault();

    var lightbox = new SimpleLightbox('.gallery__item a', { 
        captionsData: "alt",
        captionDelay: 250,
     });
}
