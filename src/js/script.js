'use stcict';
////////////////////////////////////
/* let numberOfNothing = 5;
const leftVechicleBorder = 10;

numberOfNothing = 10;
console.log(numberOfNothing); */
////////////////////////////////////
/* const obj = {
    name: 'Andrew',
    isMarried: true,
    child: true
}; */

/* console.log(obj.child); */
/* console.log(obj['isMarried']); */
////////////////////////////////////
/* let arr = ['Andrew', 'Irina', 'Michail'];

console.log(arr[2]); */
////////////////////////////////////
/* alert('Hello');

const result = confirm('Are you here?');
console.log(result); */

/* const answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* const answers = [];

answers[0] = prompt('Как Вас зовут?', '');
answers[1] = prompt('Сколько Вам лет?', '');
answers[2] = prompt('Откуда Вы?', '');

console.log(answers); */

//////Интерполяция использование переменной внутри строки(именно через ``)\\\\\\\

/* const user = 'Андрей';

alert(`Привет, ${user}`); */

///////////////////////////////////
//Префиксная форма//
/* let incr = 10;
let decr = 10;

console.log(++incr);
console.log(--decr); */

//Постфиксная форма//
/* let incr = 10;
let decr = 10;

console.log(incr++);
console.log(decr--); */
//////////////////////////////////
/*И - &&, ИЛИ - ||, % - остаток от деления, ! - отрицание (не)  */
//////////////////////////////////


const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = +prompt('На сколько его оцените?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = +prompt('На сколько его оцените?','');


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
 
      console.log(personalMovieDB);


/////Циклы///////////////////////////

const num = 50;

if (num < 30) {
    console.log ('Слишком мало нахрен!')
} else if ( num > 70) {
    console.log('Воу воу полегче!')
} else if (num == 50) {
    console.log('Йоу мэээн, вэри гуууд!')
} else {
    console.log('Вообще без вариантов браза')
}

(num == 50) ? console.log('в точку!') : console.log('мимо!')


const box = 102;

switch (box) {
    case 99: 
        console.log('Почти')
        break;
    case 101:
        console.log('Лишка')
        break;
    case 100:
        console.log('В самое яблочко')
        break;
    default:
        console.log('Не сегодня парень!')
        break;
}
//////////////////////////////////////////
console.log( NaN || 2 || undefined );  ///2


console.log( NaN && 2 && undefined );  ///NaN


console.log( 1 && 2 && 3 ); ///3


console.log( !1 && 2 || !3 );   ///false


console.log( 25 || null && !3 ); ///25


console.log( NaN || null || !3 || undefined || 5);   ///5


console.log( NaN || null && !3 && undefined || 5);  ///5


console.log( 5 === 5 && 3 > 1 || 5);   ////true

/////////////////////////////////////
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else {
    console.log('Sorry!')
}

//////////////////////////////

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
///////////////////////////////
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
