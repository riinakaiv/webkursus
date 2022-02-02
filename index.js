console.log(window);
console.log({document});


let buttonEl = document.getElementById('greet');

buttonEl.addEventListener('click', event=> {
    //console.log(event);
    let nameEl = document.querySelector('#name')
    let ageEl = document.querySelector('#age')

    let h1El = document.getElementsByTagName('h1');
    console.log(h1El);
    console.log(h1El[0].innerText);

    h1El[0].innerText = "Helloo " + nameEl.value + " you are " + 
    ageEl.value + " years old!";

});






