import emojipedia from "./emojipedia";
const newString = emojipedia.map(function (item) {
  return item.meaning.length > 100 ? item.meaning.slice(0, 100) : item.meaning;
});
console.log(newString);

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
