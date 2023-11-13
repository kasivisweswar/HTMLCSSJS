// case study
employes=[
    {"firstName":"naruto","lastName":"uzumaki","age":19},
    {"firstName":"sasuke","lastName":"uchiha","age":18},
    {"firstName":"itachi","lastName":"uchiha","age":22},
    {"firstName":"madara","lastName":"uchiha","age":52}
]
console.log(employes)
console.log(typeof(employes))

// task
// get employes <30 (filter)
// get firstName and lastName of employee (map)
// get sum of all employess (reduce)
function f1(values){
    return values <30
}
console.log(employes.filter(f1))

// snipet by sir
// employes.filter((element)=>{
//     if (Element.age >25){
//         Element.ageconsolelog(element.age);
//     }
// })