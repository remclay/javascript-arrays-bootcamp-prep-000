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
  return array;
}
function accessElementInArray(array, index){
  var arr = [1, 2, 3]
  arr[2];
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift;
  return array;
}
function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop;
  return array;
}
function removeElementFromEndOfArray(array){
  array.slice(0, array.length -1);
}
