//arguments
//build in keyword
var f=function f1(){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments.length)
}
f("nameone")
f("NameOne", "NameTwo","NameThree")