"use strict";
// const ejemploVariable = documento.querySelector('.claseEjemplo'); selecciona todos los elementos de html que contienen la clase
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModalFunc = function () { //para cerrar las ventanas y volver a su estado normal
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModalFunc = function () { //para que se muestre el modal al quitar la clase hidden
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModalFunc);
}
btnCloseModal.addEventListener("click", closeModalFunc);//agregamos un evento
overlay.addEventListener('click', closeModalFunc);

// Para manejar eventos de teclado
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModalFunc();
    }
});
