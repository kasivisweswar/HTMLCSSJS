// Nested Object
userDetails={
    firstName:"Luffy",
    lastName:"Zoro",
    userAddress :{
        job:"IT",
        contact:9876543210
    }
}
console.log(userDetails)

// {
//     firstName: 'Luffy',
//     lastName: 'Zoro',
//     userAddress: { job: 'IT', contact: 9876543210 }
//   }

console.log(userDetails.firstName+ " " + userDetails.lastName)       //Luffy Zoro
console.log(userDetails.userAddress.job+" " + userDetails.userAddress.contact)     //IT 9876543210