// object
var obj1={
    firstname:"Naruto",
    lastName:"Uzumaki",
    email:"naruto@gmail.com",
    contact:987654320    
}
console.log(obj1)

// we use JSON.stringify to get the given data as a whole string
var objJSON=JSON.stringify(obj1)
console.log(objJSON)    //{"firstname":"Naruto","lastName":"Uzumaki","email":"naruto@gmail.com","contact":987654320}
console.log(typeof(objJSON))    //string

// replace values from old to new
var r=objJSON.replace("Naruto","Sasuke")
var r=objJSON.replace("Uzumaki","Uchiha")
console.log(r)


