import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");

const markupImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link"  href="${original}"> <img class="gallery__image" src="${original}" alt ="${description}"/></a></li>`
  )
  .join(" ");

galleryUl.innerHTML = markupImg;
// console.dir(galleryUl);

const settings = {
  captionsData: "alt",
  captionDelay: 250,
};
// console.dir(settings);

let gallery = new SimpleLightbox(".gallery__link", settings);
