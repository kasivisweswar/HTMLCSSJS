// Updating , Adding, Deleting properties
//String literals

fName="Sasuke"
lName="Uchiha"

// object literals
var l1={
    firstName:fName,
    lastName:lName
}
console.log(l1)     //{ firstName: 'Sasuke', lastName: 'Uchiha' }

// Updating
l1.firstName="Itachi"
l1.lastName="Uchiha"
console.log(l1)     //{ firstName: 'Itachi', lastName: 'Uchiha' }

//Adding
l1.job="IT"
l1.contact=91951985191

console.log(l1)

// {
//     firstName: 'Itachi',
//     lastName: 'Uchiha',
//     job: 'IT',
//     contact: 91951985191
//   }

// Deleting
delete l1.lastName
console.log(l1)      //{ firstName: 'Itachi', job: 'IT', contact: 91951985191 }