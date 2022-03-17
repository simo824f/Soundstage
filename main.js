let mouse = document.querySelector(".cursor")

window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

// knapper


// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', () =>{
//     document.body.style.backgroundImage = "url(./img/paint.png)";
// });
// btn2.addEventListener('click', () =>{
//     document.body.style.backgroundImage = "url(./img/bgg.jpg)";
// });

// function changeBackground() {
//     document.body.style.backgroundImage = "url(./img/paint.png)";
// }