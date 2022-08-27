function menuBlur() {
    var myDropdown = document.getElementById("menuBox");
    if (myDropdown.classList.contains('show')) {
        document.getElementById("menuBox").classList.toggle('show');
        console.log("blurToggle")
    }
    else {
        return;
    }
}

function menuToggle() {
    document.getElementById("menuBox").classList.toggle('show');
    console.log('toggle show');
}

function timeoutMenuBlur() {
    setTimeout(menuBlur, 100);
}

document.getElementById("newsletterSubscribe").defaultChecked;

//Previous code learning...

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


// function hideMenuFunc(e) {
//     console.log('func e')
//     if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content')) {
//         var myDropdown = document.getElementById("menuBox");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//             console.log('hidden2');
//         }
//       }
//     }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */



// document.getElementById("mainMenu").onblur = function() {
//     document.getElementById("menuBox").classList.toggle('show');

// };

// function menuMorph() {
//     console.log(document.getElementById("menuBox").classList);
//     window.addEventListener('click', function hideMenuFunc(e) {
//         console.log('func e');
//         console.log(e)
//         if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content')) {
//             console.log('in between');
//             var myDropdown = document.getElementById("menuBox");
//             if (myDropdown.classList.contains('show')) {
//                 myDropdown.classList.remove('show');
//                 document.getElementById("mainMenu").setAttribute( "onClick", "menuMorph();");
//                 this.removeEventListener('click', hideMenuFunc);
//                 console.log('hidden1');
//             }
//         }

//         var myDropdown = document.getElementById("menuBox");

//     });

//     rar();
//     }

// function menuClose() {
//     document.getElementById("menuBox").classList.toggle('show');
//     document.getElementById("mainMenu").setAttribute( "onClick", "menuMorph();");
//     console.log('toggle show2');
// }
  // Close the dropdown menu if the user clicks outside of it
//
    // window.addEventListener(click, function(e) {
    //     console.log('func e')
    //     if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content')) {
    //         var myDropdown = document.getElementById("menuBox");
    //         if (myDropdown.classList.contains('show')) {
    //             myDropdown.classList.remove('show');
    //             console.log('hidden2');
    //         }
    //     }
    //     }, once=true)
