//interface for class
interface userInterface{
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}


class User implements userInterface{
    name:string;
    email : string;
    age:number;
    constructor(name:string,email:string,age:number){
        this.name = name;
        this.email =email;
        this.age =age;
        console.log('user Created : '+this.name);
    }
    register(){
        console.log(this.name + ' is now registered');
    }
    payInvoice(){
        console.log(this.name + ' paid invoice');
    }
}

class Member extends User{
    id:number;

    constructor(id:number,name:string,email:string,age:number){
        super(name,email,age);
        this.id = id;
    }
    payInvoice(){
        super.payInvoice();
    }
}

// let shayan = new User('shayan','a@a.com',21);
// console.log(shayan.age);
// shayan.register();

let mike:User = new Member(1,'mike smith','a@a.com',21);
mike.payInvoice();