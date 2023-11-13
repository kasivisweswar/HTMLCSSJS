// rest operator and spread operator
var obj1 = {
    userName: 'Naruto',
    userContact: 9876543210,
    userAge: 25,
    userAddress: 'hyd'
}
console.log(obj1)

// using rest
// if we write in function then it is rest operator
var {userName, ...r}=obj1
console.log(obj1)

// using spread
// if we write out side the function then it is spread operator
var obj2={
    ...obj1,
}
console.log(obj2)