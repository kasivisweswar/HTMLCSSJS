//isArray()

l1=[10,20,30,40,50]
console.log(Array.isArray(l1))

l2=10
//while using "Array.isArray" it can only store arrays
//if we give number of string the output will be false
console.log(Array.isArray(l2))

l3="javascript"
console.log(Array.isArray(l3))

l4=["kasi","sri","naruto"]
console.log(Array.isArray(l4))