'use strict';

const obj = {
    userName: 'Andrew',
    age: 30,
    isMarried: true,
    wifeName: 'Irina',
    isChild: true,
    childName: 'Michail'
};
console.log(obj.userName, obj.age, obj.isMarried, obj.wifeName, obj.isChild, obj.childName,);


const arr = [1, 'Andrew', 'Irina', 'Michail', 3];
console.log(arr[3]);

/* /////////////////////////// */
/* 18/12/2023 */
/* /////////////////////////// */


/* Object */
const shopObj = {
    tomatoes: 5,
    bread: 3,
    cheese: 5
};

shopObj.apple = 10;

console.log(shopObj['apple']);
console.log(shopObj.apple)


/* Array */
const varArr = [1, 2, 3];
varArr[3] = 4;

console.log(varArr[0]);


/* /////////////////////////// */
/* 20/12/2023 */
/* /////////////////////////// */

/* alert('Hello') */

/* const answer = confirm('Вам есть 18?');
console.log(answer); */


/* const answer = +prompt('Сколько Вам лет?', '');
console.log(answer + 5); */


/* const answers = [];

answers[0] = prompt('Как Ваше имя?','');
answers[1] = prompt('Какая Ваша фамилия?','');
answers[2] = prompt('Сколько Вам лет?','');

console.log(answers); */


const user = 'Андрей';

alert(`Привет, ${user}!`);