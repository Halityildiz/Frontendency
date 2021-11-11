const headingElement = document.getElementsByClassName('heading');
const value = document.querySelector('#value');
const btnElements = document.querySelectorAll('.btn');

let count = 0;
//parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
// let newFontSize = parseFloat(getComputedStyle(h1).fontSize);

btnElements.forEach(btn =>{
    btn.addEventListener('click', function(){ 

if (btn.className.includes('decrease')){
  count--;
}else if (btn.className.includes('increase')){
  count++;
}else{
  count = 0;
}if (count > 0){
  value.style.color = 'green';
  if (count == 6 || count == 10){
    value.parentElement.parentElement.style.backgroundImage = "url('anitkabir.jpg')";
  }else{
    value.parentElement.parentElement.style.backgroundImage = "none";
}}
else if (count < 0){
  value.style.color = 'red';
}else{
  value.style.color = 'black';
} value.textContent = count;

});
})


