let student = {
    name: "varad",
    rollNo: 34,
    subjects: ["math", "english", "hindi"],
    totalMarks: 600
}

// how to rename key
const { subjects : vishay, totalMarks = 500, ...variable} = student

// let vishay = subjects
// console.log(vishay);
// console.log(totalMarks);


// object merging using spread operator
let obj1 = {
    name : "yash",
    phone : 3422345567
}

let obj2 = {
    adresss : "india",
    adharCard : 345434549879,
    name :"nishant",

}

let obj3 = {...obj1 , ...obj2}

// console.log(obj3);

// array and object update

let arr = [1, 2 ,3 , 4]

arr[1] = "updated"

// console.log(arr);


const obj = {
    name: "kasturi",
    rollNo: 23,
}


obj["name"] = "vansika" // array me change karna hai toh ye
obj.name = "sumit"
// console.log(obj.name);

delete obj.rollNo // property deleted - > this is for object

// console.log(obj);

// console.log(obj.adresss?.street); // optional chaining - allows you to safely access deeply nested properties, arrays, and methods without manually verifying that each intermediate reference exist


let arr1 = [10, 2, 4, 5, 3]

// arr1.splice(1,3) // delete
arr1.splice(3,0, ["add"]) // add
// arr1.splice(3,2, ["replace"]) // replace
// console.log(arr1);

// let trimArr = arr1.slice(1 , 3)
// console.log(trimArr);

// console.log(arr1.indexOf(43624));

let res = arr1.find((value) => {
    
    if(value === 3){
        return value
    }
})

// console.log(res);

let resIndex = arr1.findIndex((value) => {
    return value === 3;
})

// console.log(resIndex);

// flat

let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]]

// console.log(arr3.flat(Infinity));

// mutability

let arr4 = [4, 5, 6, 62, 213, 13]

let arrCopy = arr4;
let arrCopy2 =[ ...arr4]; // spread operator

arrCopy2.pop()

 console.log("arr4",arr4);
 console.log("arrCopy",arrCopy2);