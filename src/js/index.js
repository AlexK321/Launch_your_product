import "../css/style.scss"

function openCloseMenu(btn, display) {
  let button = document.getElementById(btn);
  button.onclick = function() {
  let arr = document.getElementsByClassName('mobile_menu')
    for(let i=0; i< arr.length; i++) {
      arr[i].style.display = display; 
    }
  };
}

openCloseMenu('openMenu', 'flex');
openCloseMenu('closeMenu', 'none');