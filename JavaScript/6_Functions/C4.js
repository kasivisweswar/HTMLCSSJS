// inner function or calling a function in a fuunction
function f1(){
    console.log("1 f1 function")
    f2()
}

function f2(){
    console.log("1 f2 function")
}
f1()