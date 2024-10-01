"use strict";

const modal = document.querySelector(".modal");
const showModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showModalBtns.forEach((btn) => btn.addEventListener("click", showModal));
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
