const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const createGalleryImageMarkup = ({ url, alt }) => {
  return `<li class="gallery__item">
        <img src="${url}" alt="${alt}" class="gallery__img">
      </li>`;
};

const createGalleryImages = images.map(createGalleryImageMarkup).join();
galleryRef.insertAdjacentHTML("afterbegin", createGalleryImages);
console.log(createGalleryImages);

// const galleryRef = document.querySelector(".gallery");

// const createGalleryImages = (arr) => {
//   return arr.map((image) => {
//     const itemRef = document.createElement("li");
//     itemRef.classList.add("gallery__item");
//     const imageRef = document.createElement("img");
//     imageRef.classList.add("gallery__img");
//     imageRef.src = image.url;
//     imageRef.alt = image.alt;

//     itemRef.appendChild(imageRef);
//     galleryRef.appendChild(itemRef);
//     // console.log(imageRef);
//   });
// };
