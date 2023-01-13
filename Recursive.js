/* Recursive function */
// function recursiveFunct(numb) {
//     console.log(numb);
//     if(numb>0) {
//         recursiveFunct(--numb);
//     }
    
// }
// recursiveFunct(6);

 /* Factorial of the number */

// function factorial(num){
//     if(num===0){
//         return 1;
//     }
//     else{
//         return num * factorial(--num);
//     }
// }

// console.log(factorial(8));


/* Arrow function */

// const one= () => console.log("One");
// const two= () => console.log("Two");
// const four= () => {
//     console.log("Four");
//     setTimeout((one),0);
//     three();
// }
// const three= () =>{
//     console.log("Three");
//     one();
//     two();
// }
// four();

/* callback */

// function executionTime(callbackFunc) {
//     callbackFunc();
//     console.log("After Callback");
// }

// const callBack = () =>{
//     console.log("I m Callback");
//     setTimeout(()=>{
//         console.log("After 2 Sec I m Callback")
//     },2000);
// }

// executionTime(callBack);


/* Callback Practice */

// function gradeIs(grade) {
//     switch(true) {
//         case grade === "A+":
//             console.log("You have Got Grade", grade , "EXECELLENT");
//             break;
//         case grade === "A":
//             console.log("You have Got Grade", grade , "EXECELLENT");
//             break;
//         case grade === "B":
//             console.log("You have Got Grade", grade , "BEST");
//             break;
//         case grade === "C":
//             console.log("You have Got Grade", grade , "GOOD");
//             break;
//         case grade === "D":
//             console.log("You have Got Grade", grade , "IMPROVE");
//             break;
//         default:
//                 console.log("You have Got Grade", grade , "FAILED");
//             break;
//     }
// }

// function getResult(score, callBack) {
//     let Grade;
//     switch(true){
//         case score>= 90 && score <= 100:
//             Grade= "A+";
//             break;
//         case score>= 80 && score < 90:
//             Grade= "A";
//             break;
//         case score>= 70 && score < 80:
//             Grade= "B";
//             break;
//         case score>= 60 && score < 70:
//             Grade= "C";
//             break;
//         case score>= 50 && score < 60:
//             Grade= "D";
//             break;
//         default:
//             Grade= "F";
//             break;

//     }
//     callBack(Grade);
// }

// getResult(99,gradeIs);


// /* callaback Practice */

// function greeting(fullName) {
//     let Greet=" Hello,";
//     let nameIs="";
//     for(let i=0; i<fullName.length; i++){
//         const Name=nameIs + fullName[i] +" "; 
//         nameIs=Name;  
//     }
//      console.log(`${Greet} ${nameIs}`)    
// }

// function getArgs(Name, callaback) {
//     const name= Name.split(" ");
//     greeting(name);
// }

// getArgs("Shahid Khan Niazi", greeting);


/* Promises (A function that return an object).. takes parameters(resolve, reject) */

//  const promise = new Promise(function(resolve , reject){
//     //ececution of the promise
//  })
//  promise.then(function(result){
//     //on fullfilment of 1st promise
//  }, function(Error){
//     //Error
//  })


 /* Promise Practice */
//  const promise1 = new Promise((resolve , reject)=>{
//     // resolve("Async JS");
//     reject("Not Async JS");
//  });

//  promise1.then((result)=>{
//     console.log(result);
//  }).catch((Error)=>{
//     console.log(Error);
//  });

 /* Promise Practice */
//  const promise2 = new Promise((resolve,reject) =>{
//     resolve("Start Counting");
//  })

//  const counter = (val) =>{
//     console.log(val);
//  }

//  promise2.then(value=> {
//     counter(value);
//     return ("One");
//  }).then(value=> {
//     counter(value);
//     return ("Two");
// }).then((value)=>{
//         counter(value);
//         return ("Three");
// }).then((value)=>{
//     counter(value);
// }).catch((error)=>{
//     console.error(error);
// })


/*Promise with Async Await Practice(returns promise) */

// const promise3= new Promise((resolve,reject)=>{
//     resolve(console.log("I m resolve"));
//     resolve( setTimeout(()=>{
//        console.log("I m resolve After 2 Sec") },2000));
// })
// async function newFunction(){
//    const promiseValue= await promise3;
//    return promiseValue;
// }

// newFunction();

/* Promise with Async Await Practice */

// function breakfastOrder(item) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`Your ${item} is Ready`);
//         },3000)
//     })
// }

// async function Order(item) {
//   const order= await breakfastOrder(item);
//   console.log(order);
// }
// //In async all functions  will run parallel
// Order("Paratha");
// Order("Tea");
// Order("Omlete");

/* Practice */

// let counter=0;
// function incrementCounter(value) {
//     return new Promise( resolve =>{
//         setTimeout(()=>{
//             counter++;
//             resolve(`value=${value}, counter= ${counter}`)
//         },3000)
//     })
// }

// async function outPut(values){
//  console.log(`value=${values}, counter= ${counter}`);
//  const resolvedVal= await incrementCounter(values);
//  console.log(resolvedVal);
// }
// for(let i=1;i<6; i++){
//     outPut(i);
// }

/* Practice */ 

const allowedPasswords = ["Blockchain123", "Shahid12334", "Web3Metaverse"];

function checkPassword(password) {
  return allowedPasswords.includes(password);
}

function logIn(password) {
    return new Promise ((resolve, reject) => {
        if (checkPassword(password)) {
            resolve({
                status: true
            })
        }
        else{
            reject({
                status: false
            })
        }
    })
}

function passwordChecker(password) {
    logIn(password)
        .then(value => {
            console.log("Authorize User :", value);
        })
        .catch(value => {
            console.log("Rejected User :", value);
        })
}

passwordChecker("Shahid12334");
passwordChecker("password123");