// console.log(a);
// let a = 6;
// const a = 6
// var a = 9;


// addNum()

// function addNum(){
//     console.log("Hello");
// }


// console.log(addTwoNum);

// var addTwoNum = function(){
//     console.log("function expression");
// }

// var x = 6;

// function random(){
//     console.log(x);
//     var x = 3
// }

// random()

// let city = "Delhi"

// function printCity(){
//     console.log(city);
// }

// function random(){
//     let city = "Noida"
//     function printCity(){

//         console.log(city);
//     }
//     return printCity
// }

// console.log(random());
// printCity()

// random(printCity)

// function outter(){

//     let username = "nishant"
//     function inner(){
//         console.log(username);
//     }
//     return inner
// }

// const inner = outter()

// let username = "dhruv"

// inner()


function fun1(){
    let username = "nishant"

    function fun2(){

        function fun3(){

            function fun4(){
                console.log(username);
            }
            fun4()

        }

        fun3()

    }
    fun2()

}

fun1()