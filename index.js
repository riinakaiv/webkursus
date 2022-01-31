//console.log('Hello World');
let name = 'riina'; //tekst on string 
console.log(name); 
let number = 1; // int ehk integer
number = 1.444; // float, double
console.log(number);
//JS has only Number type
let boolean = true; // true or flase - tõeväärtus
console.log(boolean);
let notAVariable;
console.log(notAVariable);
let noValue = null; //väärtuse puudumine
console.log(noValue);
number = 1; 
console.log(number);
number = number +2; 
console.log(number);
let secondsInYear = 60*60*24*365;
console.log(secondsInYear);
let modulo = 10 % 2;
console.log(modulo);
number = 0; 
number++;
console.log(number);
number--;
console.log(number);
number+=10;
number-=2;
number*=2;
number/=4;
number%=3;
console.log(number);
let array = [1, 2, 3, 4]; //massiiv
console.log(array);
console.log(array[0]);
array[1] = 5;
console.log(array);
array = [1, 'asdasd', true, null, undefined];
console.log(array);
let array2d = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];
console.log(array2d);
console.log(array2d[1][1]);
console.log(array2d[2][0]);
let array3d = [
    [1],
    [2],
    [3]
];
console.log(array3d);
console.log(array3d[1][0]);
let object = {
    name: 'Riina',
    age: 37,
    hairColor: 'Brown',
    isMale: false,
    'sur-name': 'Kaiv'
}
console.log(object);
console.log(object.age);
console.log(object['sur-name']);

//let answer = 10 > 2;
//console.log(answer);
//let answer = 10 > 10;
//console.log(answer);
//let answer = 10 < 10;
//console.log(answer);
//let answer = 10 >= 10;
//console.log(answer);
//let answer = 10 <= 10;
//console.log(answer);

number = 1;
let answer = number == 10;
console.log(answer);
number = 4-3*10-10;
console.log(number);

answer = true && true;
console.log(answer);
answer = true || true || false || true;
console.log(answer);

answer = !true;
console.log(answer);
answer = !false;
console.log(answer);

answer = 1;
if(5 < answer) {
    console.log('TÕENE!');
} else {
    console.log('VÄÄR')
}

if(5 < answer) {
    console.log('Suurem kui 5!');
} else if (answer > 1 ) {
    console.log('Suurem kui 1')
} else {
    console.log('Midagi muud')
}


let dayOfWeek = 0;

if(dayOfWeek == 0) {
    console.log('esmaspäev');
} else if (dayOfWeek == 1) {
    console.log('teisipäev');
} else if (dayOfWeek == 2) {
    console.log('kolmapäev');
} else if (dayOfWeek == 3) {
    console.log('neljapäev');
} else if (dayOfWeek == 4) {
    console.log('reede');
} else if (dayOfWeek == 5) {
    console.log('laupäev');
} else if (dayOfWeek == 6) {
    console.log('pühapäev');
} else {
    console.log('imelikpäev')
}

switch(dayOfWeek) {
    case -1:
    case 0:
        console.log('esmaspäev');
        break;
    case 1:
        console.log('teisipäev');
        break;
    case 2:
        console.log('kolmapäev');
        break;
    case 3:
        console.log('neljapäev');
        break;
    case 3:
        console.log('neljapäev');
        break;
    case 4:
        console.log('reede');
        break;
    case 5:
        console.log('laupäev');
        break;
    case 6:
        console.log('pühapäev');
        break;
    default:
        console.log('imelikpäev');
        break;

}
for(let i = 0;i<10;i++){
    console.log(i);
}

for(let i = 10;i>0;i--){
    console.log(i);
}

for(let i = 0;i<100;i+=2){
    console.log(i);
}

i = 1
while (i  < 1000000) {
    console.log(i);
    i*=2;
}

i = 1000000;
do {
    console.log(i);
    i*=2;
} while(i < 1000000);

let array4d = ['mari', 'triin', 'maarja', 'kati'];

for(let i = 0; i<array4d.length; i++){
    console.log(array4d[i]);
}

array4d.forEach(element =>{
    console.log(element);
})

//console.log(foo);
var bar;
console.log(bar);

let foo = 'foo'; // foo, bar, baz
var bar = 'bar';

const baz = 'afaf';
console.log(baz);
let text = 'asdasd' + baz + foo;

console.log(text[3]);
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase())
console.log(text.toLocaleLowerCase())

let array6 = [1, 2, 3, 4, 5];
console.log(array6);
array6.push(6);
console.log(array6);
console.log(array6.pop());
console.log(array6);


function sayHello(){
    console.log('Hello!!');
}
sayHello();

let sayName = function (name) { //nimetu funktsioon ehk anonüümne funktsioon
    console.log('Hello ' + name);
}
sayName('Riina');
sayName('Mari');


let sayAge = (age) => {
    if(age >1) {
    console.log('you are '+ age + ' years old');
    }else{
    console.log('you are '+ age + ' years old');
    }
}
sayAge(37);

//let age = prompt('How old are you?');
//sayAge(age);


console.log(this);

function example1(){
    console.log(this);
}


let person = {
    age: 24,
    getAge(){
        console.log(this);
    }

}


person.getAge();

person = {
    age: 24,
    getAge(){
        return this.age;
    }
}

let age10 = person.getAge();
console.log(age10);

console.log(person.getAge());

function recursive(i){
    console.log(i);
    if(i<10){
        return recursive(i+1);
    }
}

recursive(0);