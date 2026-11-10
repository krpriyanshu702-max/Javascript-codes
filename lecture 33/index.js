// let product1 = [54329, 8.9, 75, 10, "iphone"]

// console.log(product1[0]);
// console.log(typeof product1);
// let product2 = {
//     "first-name": 32435,
//     avgRating: 4.5,
//     totalReview: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }


// }
// console.log(product2["discount"]);
// product2.printProductName()

// console.log(product2);
// let res = product2.printProductName()
// console.log(res);
// product2.printDiscount()

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// for(value of product2){
//     console.log(value);
// }

// product1.forEach(function(value , index){
//     console.log(value , index);
// })

// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }

// b(function a(){
//     console.log("a");
// })

// for(value in product2){
//     console.log(product2[value]);
//     console.log(value);
// }

// destructring 

// let [a,b,c,d] = [54329, 8.9, 75, 10, "iphone"]
// console.log(a,b);

// let {price , printDiscount, avgRating} = product2

// console.log(price, printDiscount(), avgRating);

// for ( [Key, value] of Object.entries(product2)) {
//     console.log(Key,value);
// }


// spread operator
let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// console.log(arr);
// console.log(...arr);
// console.log(Math.min(...arr));

// let a = [1, 2]
// let b = [3, 4]

// let c = [...a , ...b] // array merging by spread operator
// console.log(...c);
// console.log(Math.max(...c));

// // rest operator
// let product1 = [56835, 4.5, 75, 10, "iphone"]

// const [n, p, ...hello] = ["iphone", 56835, 4.5, 75, 10]
// console.log(hello);

// function add(...numbers){
//     let total = 0
//     for(value of numbers){
//         total += value
//     }
//     return total;
// }

// console.log(add(4, 5, 2546, 254, 2));

let product2 = {
    price: 57633,
    avgRating: 4.5,
    totalRevies: 75,
    discount: 50,
    productName: "iphone 25",
    variants : ["pro" , "base" ,"pro max"],
    manufacturerDetail : {
        city : "Dhampur",
        state : "Up",
        country : "India",
        price : 30000
    },
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.discount);
    }
}


let { manufacturerDetail , ...userKeLiyeDetail } = product2; // rest

console.log(userKeLiyeDetail);