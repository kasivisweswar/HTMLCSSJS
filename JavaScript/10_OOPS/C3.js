// inheritance
class Parent{
    // properties
    
    constructor(a,b){
        console.log(this.a,this.b)
    }
}

class Child extends Parent{
    
    constructor(c,d){
        super(10,20)
        console.log(c,d)
    }
}
new Child(30,40)