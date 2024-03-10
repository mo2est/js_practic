'use strict'

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello World!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


////function expression
const logger = function() {
    console.log('hello');
};

logger();

/////стрелочные функции

const calc = (a, b) => {
    console.log('1');
    return a + b;
};
///////////////////////
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
   return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));



/////когда нудно закончить функцию мы можем использовать return//

function test() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done')
}

test();  /* В таком случае функция возвращает значение indefined */