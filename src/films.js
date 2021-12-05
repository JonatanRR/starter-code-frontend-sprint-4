const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(directorName => directorName.director);
  console.log("EXERCICE 1 ->", result);
  return result;
  
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(directorName => {
    if(directorName.director === director) {
      return directorName.title;
    }
  });
  console.log("EXERCISE 2 ->", result); 
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array){
  let numberMovies = array.length;
  let result2 = array.reduce(function(sum, accumulator) {
    return sum.score + accumulator.score;
  },);
  let average = result2 / numberMovies;
  return average;
}
function moviesAverageOfDirector(array, director) {
  let result1 = getMoviesFromDirector(array, director) ;
  let result3 = moviesAverage(result1);
  console.log("EXERCISE 3 ->", result3);
  return result3;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(item => item.title);
  let result2 = result.sort();
  let result3 = result2.slice(0, 20);
  console.log("EXERCISE 4 ->", result3);
  return result3;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.sort((a, b) => {
    if(a.year < b.year){
      return a.year - b.year;
    }
    if(a.title < b.title) {
      return -1;
    }
  });
  let result2 = result.slice(0); // if there's no end parameter it takes all long array as final.  
  console.log("EXERCISE 5 ->", result2);
  return result2;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let result = array.filter(item => {
    if(item.genre.includes(genre)){
      if(item.score === ''){
        return item.score = 5;
      }
      return item.score;
    }
  });
  let result3 = moviesAverage(result);
  console.log("EXERCISE 6 ->", result3);
  return result3;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}