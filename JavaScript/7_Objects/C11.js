var l1={
    firstName:"Naruto",
    lastName:"Uzumaki",
    f1: function(age,contact){
        
        console.log(this.firstName,this.lastName)
        console.log(age,contact)

    }

}
console.log(l1)
l1.f1(19,98765432210)

// call()
l1.f1.call(l1,19,9876543210)    //19 9876543210

// apply()
l1.f1.apply(l1,[30,98765432210])    //30 98765432210

// bind
// to bind we need to assign it to a function
var b=l1.f1.bind(l1,28,9876543210)
b()    //28 9876543210