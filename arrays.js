var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray("picnic", ...chocolateBars){
  ["picnic", ...chocolateBars]
  return [chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  chocolateBars.unshift("picnic")
  return `chocolateBars`
}
function addElementToEndOfArray(){
  [...chocolateBars, "picnic"];
}
function destructivelyAddElementToEndOfArray(array, element){
  chocolateBars.push("picnic")
}
function accessElementInArray(array, index){
  return chocolateBars[3];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  chocolateBars.shift
  return chocolateBars
}
function removeElementFromBeginningOfArray(array){
  chocolateBars.slice(1)
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(array){
  chocolateBars.pop
  return chocolateBars
}
function removeElementFromEndOfArray(array){
  return chocolateBars.slice(0, chocolateBars.length -1)
}
