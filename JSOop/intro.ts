let fullName:string = "shubham";
let num: number = 10;
let isTrue: boolean = true
let arr:number[] = [10,20,30,]

console.log(fullName);

//tuples

let arr1 : [string,number];

arr1 = ["shubham",10]

//union

let id : number | string;

id =  10;
id = "10";


//Type Assertion

let a:any = "this is a string";

let aLength:number = (a as string).length;

let add = (num1:number , num2:number):number=>{
    return num1 + num2;
}

// interfaces
interface Person {
    firstName : string;
    lastName : string
}

let person1: Person = {
    firstName : "shubham",
    lastName : "jain"
}

//classes

// class User{
//     public fullname : string;
//     private email : string;
//     constructor(username : string , email : string){
//         this.fullname = username;
//         this.email = email;
//     }

//     get _email():string{
//         return this.email;
//     }

//     set _email(a:string){
//         this.email = a;
//     }

    
// }

// const user1 = new User("shubham","shubham@gmail.com");
// console.log(user1._email);
// user1._email = "abc@gmail.com"

// console.log(user1._email);

// export function sum(num:number):number{
//     return num;
// }

// import { sum } from ""

// function sum(num:number):number;
// function sum(num:string):string;
// function sum(num:any):any{
//     console.log(num);
// }

//decorators

function logMe(target){
    console.log(target.name);
}

@logMe
class User{
    username : string
    constructor(username){
        this.username = username;
    }
}

const user1 = new User("shubham");