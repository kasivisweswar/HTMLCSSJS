// Adding properties and function to an empty object
l1={

}
console.log(l1)     //{}

//Adding to empty object
l1.firstName="Madara"
l1.lastName="Uchiha"

console.log(l1)      //{ firstName: 'Madara', lastName: 'Uchiha' }

// adding function an empty object
l1.f1=function(){
    console.log(l1.firstName,l1.lastName)    
}
 
console.log(l1)       //{ firstName: 'Madara', lastName: 'Uchiha', f1: [Function (anonymous)] }

l1.f1()    //Madara Uchiha