// SET and GET properties using . and []
var l1={
    firstName: "Naruto",
    lastName:"Uzumaki"
}

console.log(l1)      //{ firstName: 'Naruto', lastName: 'Uzumaki' }
console.log(l1.firstName, l1.lastName)       //Naruto Uzumaki
console.log(l1['firstName'],l1['lastName'])     //Naruto Uzumaki

l1.job="IT"
console.log(l1['job'])     //IT


l1.contact = 9876543210
console.log(l1['contact'])   //9876543210

console.log(l1)       //{firstName: 'Naruto',lastName: 'Uzumaki',job: 'IT',contact: 9876543210}