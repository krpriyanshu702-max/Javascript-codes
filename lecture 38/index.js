"use strict"

// let student = {
//     name: "Aman",
//     printName: function () {
//         console.log("Hii,", this.name);
//     }
// }
// student.printName()

// let result = student.printName;

// result()


// let student2 = {
//     name : "Pritam",
//     printName : student.printName
// }

// student2.printName()


// let product = {
//     name : "Iphone",
//     printName : function(){
//         const print = () => {
//             console.log(this.name);
//         }
//         print()
//     }
// }
// product.printName()


// let name = "something"
// let product = {
//     name :"Iphone",
//     printName: () => {
//         console.log(this.name);
//     }
// }

// product.printName()

// let nestedFunction = {
//     name : "something",
//     fun : function (){
//         let product = {
//            name : "Iphone",
//            printName : () => {
//             console.log(this.name);
//            }
//         }
//         product.printName()
//     }
// }

// nestedFunction.fun()

// function fun4(){
//     let name = "something"
//     let product = {
//         name : "Iphone",
//         printName : function(){
//             const print = () => {
//                 console.log(this.name);
//             }
//             print()
//         }
        
        
//     }
//     product.printName()

// }
// fun4()


// function fun1(){
//     let name = "Fariha"

//     function fun2(){
//         console.log(name);
//     }

//     name = "Honey"
//     return fun2;
// }

// let result2 = fun1()

// result2()

// console.log(this);

// console.log(global == globalThis);

// var a = 7;

// console.log(global.a);

// function fun1(){
//     console.log(this);
// }
// fun1()

// BROWSER
// WINDOW === THIS === GLOBALTHIS

// NODE
// GLOBAL === GLOBALTHIS
