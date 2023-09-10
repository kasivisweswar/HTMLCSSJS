var l1 =[10,20,30,40,50,10,20]
//indexes 0  1  2  3  4  5  6
console.log(l1)
console.log(l1.length)
console.log(l1[0]) 
console.log(l1[1])
console.log(l1[2])
console.log(l1[3])
console.log(l1[4])
console.log(l1[5])
console.log(l1[6])

l1[0]=100
console.log(l1)

l1[7]=700
console.log(l1)

l1[10]=800
console.log(l1)

console.log(l1.length)


//iteration
for (var i =0;i<l1.length;i++){
    console.log(l1[i])
}