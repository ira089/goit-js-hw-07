import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryUl = document.querySelector(".gallery");
const markupImg = galleryItems
  .map(
    ({ preview, description }) =>
      `<li><img src="${preview}" alt="${description}" /></li>`
  )
  .join(" ");
galleryUl.innerHTML = markupImg;
