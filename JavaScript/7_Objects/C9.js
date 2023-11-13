//call() function borrowing
var l1={
    firstName:"Naruto",
    lastName:"Uzumaki",
    f1 :function(){
        console.log(this)      //{ firstName: 'Naruto', lastName: 'Uzumaki', f1: [Function: f1] }
        console.log(this.firstName,this.lastName)     //Naruto Uzumaki
    }

}

console.log(l1)   //{ firstName: 'Naruto', lastName: 'Uzumaki', f1: [Function: f1] }
l1.f1()

var l2={
    firstName:"Madara",
    lastName:"Uchiha"
}
l1.f1.call(l2)   
//Madara Uchiha
//{ firstName: 'Madara', lastName: 'Uchiha' }
console.log(l2)    //{ firstName: 'Madara', lastName: 'Uchiha' }

var l3={
    firstName:"Itachi",
    lastName:"Uchiha"
}
l1.f1.call(l3) 
//{ firstName: 'Itachi', lastName: 'Uchiha' }
//Itachi Uchiha
console.log(l3)    //{ firstName: 'Itachi', lastName: 'Uchiha' }