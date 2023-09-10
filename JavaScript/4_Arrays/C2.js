//indexOf()
l1=[10,20,30,40,50]
console.log(l1.indexOf(10))    //0
console.log(l1.indexOf(20))    //3
console.log(l1.indexOf(60))    //-1


//incliudes
//it gives the output in ture or false
l1=[10,20,30,40,80]
console.log(l1.includes(40))    //true
console.log(l1.includes(60))     //false


//push
l1=[10,20,30,40,80]
console.log(l1.length)    //5
l1.push(60)
l1.push(100)
console.log(l1)      //[10,20,30,40,80,60,100]
console.log(l1.length)    //7
console.log(l1.push(80))    ////[10,20,30,40,80,60,100,80]
console.log(l1)     ////[10,20,30,40,80,60,100,80]


//pop
//delete the last element
l1=[10,20,30,40,80]
l1.pop()
console.log(l1)  //[10,20,30,40,80]
console.log(l1.pop())    //80
console.log(l1)     //[10,20,30]


//shift()
//this cmd delets the first value
l1=[10,20,30,40,50]
l1.shift()
console.log(l1)     //[20,30,40,50]
console.log(l1.shift())    //[30,40,50]

//unshift
//adds a given value in the 1st position in array
l1=[10,20,30,40,50]
l1.unshift(60)
console.log(l1)   //[60,10,20,30,40,50]
