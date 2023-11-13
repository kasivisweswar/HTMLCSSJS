// rest operator
 function f1(x,y,z){
    console.log(x+y+z)
 }
 f1(10,20,30)    //60

//  args should be written in the back
// function f2(...args,x,y,z,) if we write like this we get an error
 function f2(x,y,z, ...args){
    console.log(x+y+z, "and", ...args)
 }
 f2(10,20,30,40,50,60)

//  SyntaxError: Rest parameter must be last formal parameter
//  function f3(...args, x,y,z){
//     console.log(x+y+z, "and", ...args)
//  }
//  f3(10,20,30,40,50,60)