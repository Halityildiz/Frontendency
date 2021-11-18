const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".logo");
const sidebar = document.querySelector(".sidebar");

console.log(sidebar);
console.log(closeBtn);
console.log(toggleBtn);

toggleBtn.addEventListener("click", (e) => {
  if (e.target.parentElement.nextElementSibling.classList.contains("sidebar")) {
    e.target.parentElement.nextElementSibling[0].style.display = "none";
    e.target.parentElement.nextElementSibling[1].style.display = "none";
  }
});

// closeBtn.addEventListener("click", remover());

// function adder(e) {
//   if (e.target.parentElement.nextElementSibling.classList.contains("sidebar")) {
//     e.target.parentElement.nextElementSibling[0].style.display = "none";
//     e.target.parentElement.nextElementSibling[1].style.display = "none";
//   }
// }

// function remover(e) {
//   e.target.parentElement.nextElementSibling.style.display = "none";
// }
