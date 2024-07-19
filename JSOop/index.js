// function User(username , email){
//     this.fullname = username
//     this.email = email
// }


// User.prototype.getName = function (){
//     console.log(this.fullname)
// }

// const user1 = new User("shubham","shubham@gmail.com");
// console.log(user1);


class User{
    constructor(username){
        this.fullname = username
    }

    getName (){
        console.log(this.fullname);
    }

}

class Teacher extends User{
    constructor(username , email , password , course){
        super(username);
        this.email = email;
        this.password = password;
        this.course = course;
    }

    getCourse (){
        console.log(this.course);
    }
}

const teacher1 = new Teacher("vinay","vinay@gmail.com","123","FSD");
console.log(teacher1.getName());

//iife 
// (function sum(){
//     console.log("sum called");
// })();
// (function(){
//     console.log("sub called");
// })()

//obsevables

// function createObserver(){
//     const intervalId =  setInterval(()=>{
//         const value = Math.random();
//         console.log(value)
//     },1000)

//     return {
//         unSubscribe : function (){
//             clearInterval(intervalId);
//             console.log("observer Unsubcribed")
//         }
//     }
// }

// const newObserver = createObserver();

// setTimeout(()=>{
//     newObserver.unSubscribe();
// },5000)