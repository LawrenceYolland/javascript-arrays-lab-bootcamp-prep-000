var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
// Add name to end of array
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
// Add name to start of array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
// Remove last value in array
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
