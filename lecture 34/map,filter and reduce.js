let originalPrices = [463, 654, 2346]

let discountedPrices = []

for(value of originalPrices){
     // let discount = value * 10 / 100
    // discountedPrices.push(value  - discount) // 10% discount

    discountedPrices.push(value * 0.9) // 10% discount
}



originalPrices.forEach((value) =>{
    discountedPrices.push(value * 0.9) // 10% discount
})

// console.log(originalPrices);
// console.log(discountedPrices);

const discountedPrices2 = originalPrices.map((value) => value * 0.9);

// console.log(discountedPrices2);

let students = [
    {
        name: "Ayaan",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 46,
    },
    {
        name: "Debadrita",
        marks: 33,
    },
    {
        name: "Shivan",
        marks: 30,
    },
    {
        name: "Alauddin",
        marks: 28
    }
]

// let studentNames = []
//  students.forEach((value) => {
//     studentsNames.push(value.name)
//  })

 const studentNames = students.map((student) => student.name)
 const studentMark = students.map((student) => student.marks)

//  console.log(studentNames , studentMark);

let boostedMarks = students.map(student => ({...student, marks: student.marks + 10 }))

// let boostedMarks = students.map(student => student.marks < 33)  // [ false, false, false, true, true ]
// console.log(boostedMarks);

// let failedStudents = []

// students.forEach((student) => {
//     if(student.marks < 33){
//         failedStudents.push(student)
//     }
// })

// chaining

const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)  // [ { name: 'Shivan', marks: 30 }, { name: 'Alauddin', marks: 28 } ]

// let marks = [56, 24, 62, 73, 78]

// let totalMarks = 0

// marks.forEach((mark) => totalMarks = totalMarks + mark)

// const totalMarks = marks.reduce((totalMarks, mark) => totalMarks + mark, 0)
// const totalMarks = marks.reduce((totalMarks, student) => totalMarks + student.mark, 0)
// console.log(totalMarks);

const attendence = ["present", "present", "absent", "present", "absent"]