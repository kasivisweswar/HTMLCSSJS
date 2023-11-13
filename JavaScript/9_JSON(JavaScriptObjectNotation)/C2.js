// object
var obj1={
    firstname:"Naruto",
    lastName:"Uzumaki",
    email:"naruto@gmail.com",
    contact:987654320    
}
console.log(obj1)

// {
//     firstname: 'Naruto',
//     lastName: 'Uzumaki',
//     email: 'naruto@gmail.com',
//     contact: 987654320
//   }

// we use JSON.stringify to get the given data as a whole string
var objJSON=JSON.stringify(obj1)
console.log(objJSON)    //{"firstname":"Naruto","lastName":"Uzumaki","email":"naruto@gmail.com","contact":987654320}
console.log(typeof(objJSON))    //string


// now JSON data to a javascript object
var obj2=JSON.parse(objJSON)
console.log(obj2)
console.log(typeof(obj2))

// {
//     firstname: 'Naruto',
//     lastName: 'Uzumaki',
//     email: 'naruto@gmail.com',
//     contact: 987654320
//   }
//   object