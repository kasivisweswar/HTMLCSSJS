//object literals using this keyword
//using this keyword refers to the current object
var l1={

    // properties
    firstName:"Naruto",
    lastName:"Uzumaki",

    // function
    display: function(){
        console.log("Direct this: "+this)
        console.log("Calling properties using this: "+this.firstName+ " " + this.lastName)
    }
}

console.log(l1)

// calling function outside the scope of object
l1.display()

// calling properties outside the scope of object
console.log(l1.firstName+ " " + l1.lastName)