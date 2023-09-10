//join()
var l1=[10,20,30,40,50] 
console.log(l1)        //[ 10, 20, 30, 40, 50 ]
console.log(l1.join())    //10,20,30,40,50
console.log(l1.join(''))    //1020304050
console.log(l1.join(' '))   //10 20 30 40 50
console.log(l1.join('_'))     //10_20_30_40_50
console.log(l1.join('='))      //10=20=30=40=50
console.log(l1.join(' and '))    //10 and 20 and 30 and 40 and 50