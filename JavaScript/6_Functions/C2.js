// global variable 
// it means we can access it any where
var a=10
console.log(a)

function f1(){
    console.log("inside: "+ a)
}
console.log(a)

f1()

//local variable
//it cannot access every where
function f2(){
    b=100
    console.log("inside: "+ b)
}
//console.log(b)   //ReferenceError: b is not defined

f2()