//using object literals as values in another object
// string literals
var firstName="Sasuke"
var lastName= "Uchiha"

// object literals
var l1={

    // calling string literals as values in object
    fName: firstName,
    lName: lastName
}
console.log(l1)     //{ fName: 'Sasuke', lName: 'Uchiha' }

// we write values directly in next object
var l2={
    firstName,
    lastName
}
console.log(l2)      //{ firstName: 'Sasuke', lastName: 'Uchiha' }