// now writing function outside
var l1={
    firstName:"Madara",
    lastName:"Uchiha"
}
console.log(l1)

f1=function(){
    console.log(this.firstName,this.lastName)

}
// call()
f1.call(l1)

// { firstName: 'Madara', lastName: 'Uchiha' }
// Madara Uchiha

var l2={
    firstName:"Itachi",
    lastName:"Uchiha"
}
f1.call(l2)     //Itachi Uchiha