$(document).ready(function(){
  
const output2 = document.querySelector('.output2');
const output1 = document.querySelector('.output1');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clearAll');

btns.forEach(btn => {
  btn.addEventListener('click' ,function()  {
    let content =btn.getAttribute('data-num');
    output2.textContent += content ;
  })
})

clearAll.addEventListener('click' ,function() {
  output2.textContent = '' ;
  output1.textContent = '' ;
})

equal.addEventListener('click' , function(){
    let expression = output2.textContent ;
    output2.textContent = eval(expression);
    output1.textContent = eval(expression);
})

clear.addEventListener('click', function(){
  let str = output2.textContent ;
  let arr = str.split('') ;
  arr.pop();
  output2.textContent =arr.join('') ;
})

});


