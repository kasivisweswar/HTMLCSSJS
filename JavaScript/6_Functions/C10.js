//Higher Order Functions with arguments
//A function that takes as argument and returns a function
f1 = function(a){
    console.log(a)   //10
    return function(b){
        console.log(a+b)   //15
        console.log(a-b)   //5
        console.log(a*b)   //50
    }
}
f=f1(10)
f(5)