//function with arguments and template Strings
function f1(fname,lname){
    console.log("First name is ",fname, "Last name is ",lname)    //First name is  Naruto Last name is  Uzumaki
    //template string
    console.log(`First name is ${fname} Last name is ${lname}`)   //First name is Naruto Last name is Uzumaki
}
f1("Naruto","Uzumaki")

//assign function to a variable with arguments and template Strings
f2=function(fname,lname){
    console.log("First name is ",fname, "Last name is ",lname)   //First name is  Naruto Last name is  Uzumaki
    //template string
    console.log(`First name is ${fname} Last name is ${lname}`)   //First name is Naruto Last name is Uzumaki
}
f2("Naruto","Uzumaki")


//Arrow function with arguments and template Strings
f3 = (fname,lname) => {console.log("First name is ",fname, "Last name is ",lname)}   //First name is  Naruto Last name is  Uzumaki
f3("Naruto","Uzumaki")

//template string
f4 = (fname,lname) => `First name is ${fname} Last name is ${lname}`
console.log(f4("Naruto","Uzumaki"))  //First name is Naruto Last name is Uzumaki