use("BCA")

// db.createCollection("students")

//it is used add or insert one document in a collection
// db.students.insertOne({"name":"Alex","section":"B"})


//To add multiple document in a collection
// db.students.insertMany([{"name":"Joy","section":"C"},{"name":"Sara","section":"D"},{"name":"John","section":"A"}])

// To Read the documents
// db.students.find()


//To read a document (First Occurrence)

// db.students.findOne({"name":"John"})

// To update a single first occurrence
// db.students.updateOne({
//     "name":"John"
   
// },{
//      $set:{
//         "name":"Alice"
//     }
// })


//to update multiple matched documents

// db.students.updateMany({"section":"B"},{$set:{
//     "section":"E"
// }})


//toi delete a matched document (first Occurrence)
// db.students.deleteOne({"name":"Sara"})

//to delete multiple documents
db.students.deleteMany({"name":"David"})