//Aggregation

use("BCA")

// db.students.find()

// db.students.aggregate([
//     {
//          $match
//     },

//     {
//        $group
//     },
//     {
//        $project
//     }
// ])


// db.students.aggregate([

//     {
//         $match:{
//             "course":"BCA"
//         }
//     }
// ])


// db.students.aggregate([

//     {
//         $match:{
//             "attendance":{
//                 $gt:85
//             }
//         }
//     },
   
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course"
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id:"$age",

//             totalSt:{
//                 $sum:1
//             }
//         }
//     }
// ])


// db.students.aggregate(
//     [

//         {
//             $group:{
//                 _id:"$course",
//                 avgAtt:{
//                     $avg:"$attendance"
//                 }
//             }
//         }
//     ]
// )


// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course",
//             maxMathMarks:{
//                 $max:"$marks.math"
//             }
//         }
//     }
// ])


// db.students.aggregate([

//     {
//         $match:{
//             "city":"Delhi"
//         }

//     },
//     {$group:{
//         _id:"$city",
//         totalSt:{
//             $sum:1
//         }
//     }}
// ])


// db.students.aggregate([
//     {
//         $project:{
           
//             name:1,
//             course:1,
//             "marks.math":1
//     }
// }
// ])


// Display name and total marks, where total marks are calculated from Math, DBMS, and Web marks.
db.students.aggregate([

    {
        $project:{
            name:1,
            totalMarks:{
                $add:["$marks.math","$marks.dbms","$marks.web"]
            }
        }
    }
])