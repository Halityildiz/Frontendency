const navBar = document.querySelector('.navBar');
const links = document.querySelector('.links');
const socialIcon = document.querySelector('.social-icons');

navBar.addEventListener('click', function () {
  links.classList.toggle('show-links');
  socialIcon.classList.toggle('show-social');
});
