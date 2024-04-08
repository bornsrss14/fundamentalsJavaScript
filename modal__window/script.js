"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModalFunc = function () { //para cerrar las ventanas y volver a su estado normal
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModalFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModalFunc);
}

btnCloseModal.addEventListener("click", closeModalFunc);
overlay.addEventListener('click', closeModalFunc);
