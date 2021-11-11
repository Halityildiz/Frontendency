const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const socialLinks = document.querySelector('.social-icons');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
  socialLinks.classList.toggle('show-social');
});
