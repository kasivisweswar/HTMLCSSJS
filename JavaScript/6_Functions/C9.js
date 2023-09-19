//Higher Order FUnctions
//A function that takes as argument and returns a function
parent = function(){
    console.log("outer function")
    return function(){
        console.log("inner function")
    }
}

child=parent()
child()
console.log(typeof(child))
console.log(typeof(parent))