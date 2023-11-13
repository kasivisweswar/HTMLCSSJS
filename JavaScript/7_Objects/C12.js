l1=[10,20,30,40,50]
// function
function checkValues(l1){
    return l1>=20
}

// call()

console.log(l1.find(checkValues))
console.log(l1.findIndex(checkValues))


