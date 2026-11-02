use("BCA")

// db.students.find({course:"BCA"}).explain("executionStats")

// db.students.createIndex({course:1})

// db.students.find({course:"BCA"}).explain("executionStats")

// db.students.getIndexes()


db.students.createIndex({course:1,age:1})