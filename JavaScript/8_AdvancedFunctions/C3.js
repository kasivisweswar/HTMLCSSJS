// spread operator
// merging the Arrays
l1=[10,20,30,40,50]
l2=[60,70,80,90,100]
l3=[...l1, ...l2]
console.log(l3)        //[10, 20, 30, 40,50,60, 70, 80, 90, 100]


// merging the Objects
obj1={
    userName:"Naruto",
    userContact:9876543210
}
obj2={
    userAge:25,
    userAddress:"hyd"
}
obj3={
    ...obj1,
    ...obj2
}
console.log(obj3)

// {
//     userName: 'Naruto',
//     userContact: 9876543210,
//     userAge: 25,
//     userAddress: 'hyd'
//   }