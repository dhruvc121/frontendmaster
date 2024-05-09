let u_name:String="dhruv"
console.log(u_name);

const sum=(a:number,b:number)=>{
    console.log(a+b,"-----")
}

sum(2,5)

interface test{
    id : number;
    name: string;
    email: string;
}
class testClass{
     id : number;
     name: string;
     email: string;

    constructor(id:number,name:string,email:string){
        this.id=id;
        this.name=name;
        this.email=email;
    }
}

const newTest:test=new testClass(1,"dhruv","dhurvc121@gmail.com");
/* newTest.id=1
newTest.name="dhruv"
newTest.email="dhruvc121@gmail.com" */

console.log(newTest)


let myFoo:(para1:number,para2:string,para3:object)=>number=(para1,para2,para3)=>{ 
    console.log(para1,para2,para3)
    return 1
}

let mynum:number=myFoo(1,"string",['apple','mango','orange'])
