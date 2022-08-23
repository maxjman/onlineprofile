// function clickOutsideMenu(){
//     var menu = document.getElementById('mainMenu');
//     if (event.target != menu){
//         menuClosed()
//     }
// }

// function com(event){
//     var menu = document.getElementById('mainMenu');
//     if (event.target != menu) {
//         menuClosed()
//     }
// }

// function menuMorph() {
//     var menu = document.getElementById('mainMenu');
//     var box = document.getElementById('menuBox');
//     var html = document.getElementById('wholePage')
//     if (menu.value == "≡" && menu.classList.contains('fullyClosed')) {
//         menu.value = "▢";
//         menu.innerHTML = "▢";
//         menu.classList.remove('fullyClosed');
//         box.style.display='block'
//         html.addEventListener('click', com())
//         console.log("listener added")
//     }
//     else {
//         menu.value = "≡";
//         menu.innerHTML = "≡";
//     }

// }

// function menuClosed() {
//     var menu = document.getElementById('mainMenu');
//     var box = document.getElementById('menuBox');
//     var html = document.getElementById('wholePage')
//     if (menu.value == "▢" && !menu.classList.contains('fullyClosed'))
//         menu.value = "≡";
//         menu.innerHTML = "≡";
//         menu.classList.add('fullyClosed')
//         box.style.display='none'
//         html.removeEventListener('click',  com())
//         console.log("listener removed")
//     }

// window.addEventListener('click', function(event){
//     var menu = document.getElementById('mainMenu');
// 	if (event.target != menu){
//         menuClosed()
//     }
// });


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuMorph() {
    document.getElementById("menuBox").classList.toggle('show');
    console.log('showed');
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content')) {
        var myDropdown = document.getElementById("menuBox");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
      }
    }
