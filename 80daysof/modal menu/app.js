const modalBtn = document.querySelector(".modalbtn");
const modal = document.querySelector(".modal-section");
const closeBtn = document.querySelector(".closebtn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
