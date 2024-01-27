'use stcict';
////////////////////////////////////
let numberOfNothing = 5;
const leftVechicleBorder = 10;

numberOfNothing = 10;
console.log(numberOfNothing);
////////////////////////////////////
const obj = {
    name: 'Andrew',
    isMarried: true,
    child: true
};

/* console.log(obj.child); */
console.log(obj['isMarried']);

let arr = ['Andrew', 'Irina', 'Michail'];

console.log(arr[2]);
////////////////////////////////////
/* alert('Hello');

const result = confirm('Are you here?');
console.log(result); */

/* const answer = prompt("Вам есть 18?", "");
console.log(answer); */

const answers = [];

answers[0] = prompt('Как Вас зовут?', '');
answers[1] = prompt('Сколько Вам лет?', '');
answers[2] = prompt('Откуда Вы?', '');

console.log(answers);