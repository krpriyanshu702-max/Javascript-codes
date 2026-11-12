
function greetingMsg(userName , greeetings) {

    console.log(`${greeetings}, ${userName}`);
}

greetingMsg("Priyanshu", "Hii")
greetingMsg("vivek", "ka ho")
greetingMsg("sunny", "ka haal ba")
greetingMsg("summan", "hello")
greetingMsg("anjali", "wassup")


// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);

//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);

//         case "*":
//             console.log(`${num1} ${operator} ${num2} =`, num1 * num2);
//     }


// }

// calculator(5,7,"*")

// let alokMarks = 46 + 56 + 23;
// let addiMarks = 24 + 24 + 42;
// let karan = 54 + 23 + 65;
// let anu = 54 + 52 + 23;

// function totalMarks(studentName, mathsMarks, scienceMarks, sanskritMarks){
//     console.log(`${studentName} totalMarks =`, mathsMarks+ scienceMarks + sanskritMarks );
// }

// totalMarks("alok", 32 ,44 ,55);


// function totalMarks(mathsMarks, scienceMarks, sanskritMarks) {
//     return mathsMarks + scienceMarks + sanskritMarks
// }

// function calPercentage(studentName, mathsMarks, scienceMarks, sanskritMarks) {
//     let total = totalMarks(mathsMarks, scienceMarks, sanskritMarks)
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage :`, percentage);
//     return percentage
// }

// let percentage = calPercentage("Alok", 46, 56, 23)
// console.log(percentage);


// totalMarks("Alok", 46, 56, 23)
// totalMarks("Addi", 24, 24, 42)
// totalMarks("Karan", 54, 23, 65)
// totalMarks("Anu", 54, 52, 23)

// function declaration

fun1()
function fun1() {
    console.log("function declaration");
}


// function expression

// let add = function(num1, num2){
//     return num1 + num2
// }
// console.log(add(3,5));


// Arrow function

// syntax 1
let add = num1 => num1 + 4;

// syntax 2
let d = (num1, num2) => num1 + num2;

// syntax 3
let ad = (num1, num2) => {
    // something
    // somthing
    return num1 + num2;
}
console.log(add(4, 5));



