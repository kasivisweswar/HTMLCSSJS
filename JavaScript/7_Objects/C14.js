// map (func)
l1=[10,20,30,40,50]
console.log(l1)
// function outside map
function f1(values){
    return values >30
}
console.log(l1.map(f1))

// function inside map
let l2=l1.map(function(values){
    return values *2
})
console.log(l2)


// Arrow function inside map
let l3=l1.map((values)=>{
    return values*2
})
console.log(l3)

let l4=l1.map((values)=>{
    console.log(values*20)
})