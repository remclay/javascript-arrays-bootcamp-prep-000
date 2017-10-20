var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
chocolateBars

function addElementToBeginningOfArray(array, element){
  [element, ...array];
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
}
function accessElementInArray(array, index){
  array[n];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift;
  return array;
}
function removeElementFromBeginningOfArray(array){
  chocolateBars.slice(1)
  chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(array){
  chocolateBars.pop
  chocolateBars
}
function removeElementFromEndOfArray(array){
  chocolateBars.slice(0, chocolateBars.length -1)
}
