import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryUl = document.querySelector(".gallery");

const markupImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link"  href="${preview}"> <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" /></a></li>`
  )
  .join(" ");

galleryUl.innerHTML = markupImg;

galleryUl.addEventListener("click", onClick);
function onClick(evt) {
  //   console.log(evt.target);
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const imgOriginal = evt.target.dataset.source;
  //   console.log(imgOriginal);

  const instance = basicLightbox.create(`
    <img  src="${imgOriginal}"/>  
`);
  instance.show();
  galleryUl.addEventListener("keydown", offClick);
  function offClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
