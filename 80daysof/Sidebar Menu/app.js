const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".logo");
const sidebar = document.querySelector(".sidebar");

// console.log(sidebar);
// console.log(closeBtn);
// console.log(toggleBtn);

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
