
let buttonElement= document.querySelectorAll('.js-button')
for(let i = 0; i < buttonElement.length; i++){
  buttonElement += buttonElement[i];
  buttonElement.addEventListener('click',(event)=>{
      event.document.querySelectorAll('.footer-i').style.backgroundColor='green';
  })
}