import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


const galleryBox = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(({preview, original, description}) =>`<a class = "gallery__link" href =${original}><img class = "gallery__image" src="${preview}" alt="${description}"></a>`).join("");
galleryBox.innerHTML=galleryMarkup;
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
galleryBox.addEventListener("click", showBigPicture);
function showBigPicture(event){
}