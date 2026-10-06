use("BCA")



//To retrieve the data whose attendance is greater than 95
// db.students.find({"attendance":{
//     $gt:95
// }})



//Tot retrieve the data whose age is less than 20
// db.students.find({"age":{
//     $lt:20
// }})


//To retrieve the data whose age is not equal to 20
// db.students.find({"age":{
//     $ne:20
// }})


//To retrieve the data whose attendnace is greater than 75 and less than equal to 90
// db.students.find({
//     "attendance":{
//         $gt:75,
//         $lte:90
//     }
// })

//To retrive the data whose course is BCA and attendance is greater than 75

// db.students.find({"course":"BCA",
//     "attendance":{
//     $gt:75
// }
// })


// db.students.find()


// db.students.find({
//     $or:[
//         {"course":"BBA"},
//         {"attendance":{$gt:75}}
//     ]
// })



// db.students.find({"course":"CSE"},{
//     studentId:1,
//     course:1,
//     name:1,
//     _id:0
// })


// db.students.find({}).skip(0).limit(6).sort({age:-1})

