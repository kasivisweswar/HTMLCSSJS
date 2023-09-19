// OBJECTS Literals

// Array,String,Null are object in JavaScript

// in Objects we cannot write console...if we do then it will give us an error


var l1={

    // properties
    firstName:"Naruto",
    lastName:"Uzumaki",
    //console.log(firstName,lastName)  //SyntaxError: Unexpected identifier 'console'

    // function
    display: function(){
        console.log("Display Function")
    }
}

console.log(l1)
//{firstName: 'Naruto',lastName: 'Uzumaki'}
//{firstName: 'Naruto',lastName: 'Uzumaki',display: [Function: display]}


//objectRef.functionNam
l1.display()

//{firstName: 'Naruto',lastName: 'Uzumaki',display: [Function: display]}
// Display Function