const btn = document.querySelector('#clicker');

btn.onclick = function(){
  console.log('You clicked me! Go away!');
}

btn.ondblclick = function () {
  console.log('Double Click!');
}
