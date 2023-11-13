// difference b/w var, let,constant(const)
// var keyword is not strictly typed
var a=10
console.log(a)

var a=20
console.log(a)

// let keyword is strictly typed
let x=100
console.log(x)
// if we write the x which is already declared then it will give a warning
// let x=100
// console.log(x)

// then again we ccan write it without using let
x=200
console.log(x)

// const
const i=1000
console.log(i)

// const is also strictly types
i=2000
console.log(i)     //TypeError: Assignment to constant variable.
// for using i 2nd time we got that error