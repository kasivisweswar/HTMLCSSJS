l1=[10,20,30,40,50,10,60,70,80,90,10,100]
console.log(l1)
console.log(l1.length)
console.log(l1.indexOf(10))   //0
console.log(l1.lastIndexOf(10))
//here the 10,3 is to find the number 10 start searching the list after or from the 3 index 
//and the indexof will be searching from left to right
console.log(l1.indexOf(10,3))
//here the 10,3 is to find the number 10 start searching the list after or from the 7  index
//and the lasiindexof will be searching from right to left from that position to left
console.log(l1.lastIndexOf(10,7))