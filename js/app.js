"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

let filmOne = prompt('Один из последних просмотреных фильмов?', '0'),
    filmOneRating = +prompt('Ваша оценка этого фильма?', '0'),
    filmTwo = prompt('Один из последних просмотреных фильмов?', '0'),
    filmTwoRating = +prompt('Ваша оценка этого фильма?', '0');

personalMovieDB.movies[filmOne] = filmOneRating;

personalMovieDB.movies[filmTwo] = filmTwoRating;

console.log(personalMovieDB);