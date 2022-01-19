function increment(){
  let current_value=parseInt(document.querySelector('strong').innerHTML)||0;
  document.querySelector('strong').innerHTML=++current_value;
}

function decrement(){
  let current_value=parseInt(document.querySelector('strong').innerHTML)||0;
  if(current_value>0){
    document.querySelector('strong').innerHTML=--current_value;
  }
}

document.querySelector('i.fa-caret-square-up').addEventListener('click',increment);
document.querySelector('i.fa-caret-square-down').addEventListener('click',decrement);