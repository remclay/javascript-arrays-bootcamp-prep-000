var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray("picnic", ...chocolateBars){
  ["picnic", ...chocolateBars]
  chocolateBars
}
function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.unshift("picnic")
  chocolateBars
}
function addElementToEndOfArray(){
  [...chocolateBars, "picnic"];
}
function destructivelyAddElementToEndOfArray(array, element){
  chocolateBars.push("picnic")
}
function accessElementInArray(array, index){
  chocolateBars[3];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  chocolateBars.shift
  chocolateBars
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
