var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
// Add name to end of list
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
// Add name to start of list
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

