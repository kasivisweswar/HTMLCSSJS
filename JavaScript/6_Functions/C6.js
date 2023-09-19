//pure function
// pure function will always produce the same output
// pure function does not modify any data outside its scope

//Pure function
function f1(){
    n=5
    square=n*n
    console.log(square)
}
n=10 //when its pure function this cmd will be of no use
f1()

//impure function
// impure function can produce different outputs for the same inputs due to changes in the program's state
// impure function can make code harder to reason about and test
n=5
function f2(){
    square=n*n
    console.log(square)
}
n=10 //when its impure function this cmd will be in use
f2()


//pure function
function loginUser(userName, password){
    if(userName=="Admin" && password=="Admin"){
        console.log("login success")
    }
    else{
        console.log("login failure")
    }
}
loginUser("Admin","Admin")

//impure function

function login(userName, password){
    userName="Developer"
    if(userName=="Admin" && password=="Admin"){
        console.log("login success")
    }
    else{
        console.log("login failure")
    }
}
login("Admin", "Admin")
