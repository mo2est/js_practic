'use strict'

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

/* for(let i = 0; i < 2; i++) {
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = +prompt('На сколько его оцените?','');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
} */
let i = 0;
/* while (i < 2) {
    i++;
    const a = prompt('Один из последних просмотренных фильмов?',''),
      b = +prompt('На сколько его оцените?','');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
} */
do  {
    i++;
    const a = prompt('Один из последних просмотренных фильмов?',''),
      b = +prompt('На сколько его оцените?','');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
} while (i < 2); 


    if(personalMovieDB.count < 10) {
        console.log('Мало просмотров');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы - классический зритель');
    } else if(personalMovieDB.count >= 30) {
        console.log('Вы - киноман!');
    } else {
        console.log('ERROR');
    }


console.log(personalMovieDB);