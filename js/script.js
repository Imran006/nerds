const openModal = document.querySelector(".button-address");
const popupWrite = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const faildName = popupWrite.querySelector("[name=name]");
const faildEmail = popupWrite.querySelector("[name=email]");
const faildLetter = popupWrite.querySelector("[name=letter]");
const form = popupWrite.querySelector("form");


let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
  if (storageName && storageEmail) {
    fieldName.value = storageName;
    fieldEmail.value = storageEmail;
    fieldLetter.focus();
  } else {
    fieldName.focus();
  }
});

openModal.addEventListener("click", function () {
    popupWrite.classList.add("modal-show");
    faildName.focus ();
});

modalClose.addEventListener("click", function() {
  popupWrite.classList.remove("modal-show");
  if (popupWrite.classList.contains("modal-error")) {
    popupWrite.classList.remove("modal-error");
  }
});

form.addEventListener("submit", function (evt) {
  if (!faildName.value || !faildEmail) {
    evt.preventDefault();
    console.log("введите данные");
    popupWrite.classList.add("modal-error");
  }
  if (isStorageSupport) {
    localStorage.setItem("name", fieldName.value);
    localStorage.setItem("email", fieldEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWrite.classList.contains("modal-show")) {
      evt.preventDefault();
      popupWrite.classList.remove("modal-show");
      if (popupWrite.classList.contains("modal-error")) {
        popupWrite.classList.remove("modal-error");
      }
    }
  }
});


//Карусель

const imageSlide = document.querySelectorAll(".info-title");
const btnSlide = document.querySelectorAll(".btn-slider");

const changeSlide = function (imageSlide, btnSlide, index) {
  for (let i = 0; i < imageSlide.length; i++) {
    if (imageSlide[i].classList.contains("slide-current")) {
      imageSlide[i].classList.remove("slide-current");
    }
  }
  imageSlide[index].classList.add("slide-current");

  for (let q = 0; q < btnSlide.length; q++) {
    if (btnSlide[q].classList.contains("current-btn")) {
      btnSlide[q].classList.remove("current-btn");
    }
  }
  btnSlide[index].classList.add("current-btn");
};

for (let counter = 0; counter < btnSlide.length; counter++) {
  btnSlide[counter].addEventListener("click", function () {
    changeSlide(imageSlide, btnSlide, counter);
  });
}

