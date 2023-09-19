// closure
function f1(){
    x=10
    console.log(x)
    function f2(){
    y=20
    console.log(y)
    }
    return f2
}
f=f1()
f()

delete f1()
f()

console.log("after delete")
f1()
