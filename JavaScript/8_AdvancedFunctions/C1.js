// forEach
l1=[10,20,30,40,50]
console.log(l1)

l1.forEach(function(value){
    console.log(value)
})

l1.forEach(function(value,index){
    console.log(value,index)
})

function f2(value,index){
    console.log(value,index)
}
l1.forEach(f2)

function f2(value,index,elements){
    console.log(value,index,elements)
}
l1.forEach(f2)