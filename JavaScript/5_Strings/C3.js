//charAt()
userName="Nameone"
console.log(userName.charAt(0))     //n
console.log(userName.charAt(4))     //o
console.log(userName.charAt(12))   //empty spaces


//charCodeAt()
product="Apple"
console.log(product.charCodeAt('0'))    //65
console.log(product.charCodeAt('4'))    //101

//includes
userName= "NameOne"
console.log(userName.includes('N'))    //true
console.log(userName.includes('M'))    //false


//indexOf()
userName="G kasi visweswar"
console.log(userName.indexOf('k'))     //2
console.log(userName.indexOf('a',5))    //14

//lastIndexOf()
userName="K Sai Kumar"
console.log(userName.lastIndexOf('k'))      //-1
console.log(userName.lastIndexOf('K',3))      //0