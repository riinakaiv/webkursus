let imgs = document.querySelectorAll('myslider .images img');
console.log(imgs);

let prew = document.querySelector('#prev'); 
let active = 0;
prev.addEventListener('click', () => { 
    imgs[active].className = ''; 
    imgs[active-1].className = 'active'; 
    active--;
    });


document.querySelector('next').addEventListener('click', () => {
    imgs[active].className = ''; 
    imgs[active+1].className = 'active'; 
    active++;

}
 