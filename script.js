let minus = document.getElementsByClassName('minus')[0];
let reset = document.getElementsByClassName('reset')[0];
let plus = document.getElementsByClassName('plus')[0];

let countValue = document.getElementsByClassName('count')[0];


minus.addEventListener('click',() =>{
  let count = parseInt(countValue.innerText);
  if(count == 0){
    alert('counter value can be less than zero');
    return;
  }
  count--;
  countValue.innerText = count;
})

reset.addEventListener('click',() =>{
  countValue.innerText = 0;
})

plus.addEventListener('click',() =>{
  let count = parseInt(countValue.innerText);
  count++;
  countValue.innerText = count;
})
