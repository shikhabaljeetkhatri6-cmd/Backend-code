use("UniversityDB")

// db.students.insert([
//     {
//     name: "amisha",
//     section: "D",
//     course: " BCA",
//     semester: 3,
//     marks: 50,
//     contact: 1234567899,
//     city: "Gurugram"
//    },
//    {
//     name: "nidhi",
//     section: "D",
//     course: " BCA",
//     semester: 5,
//     marks: 30,
//     contact: 9876543201,
//     city: "Delhi"
//    }
// ])

//db.students.find()
// db.students.findOne()

// db.students.find({name: "Amisha"})
// db.students.find({course: " BCA"})

// db.students.updateOne(
//     {name: "nidhi"},
//     {
//         $set: {
//             // semester: 5,
//             // marks: 80,
//             // section: "D",
//             // city: "Gurugram",
//             // name: "Priya",
//             // course: "BCA"
//             contact: 5678901234
//         }
//    }
// )

// db.students.deleteOne({
//     _id: ObjectId('6ad85601ea5e3ebde88cb24b')

// })

// db.students.find(
//     {
//         marks: {
//         $gt: 80
//         }
//     }
// )

// db.students.find(
//     {
//         marks: {
//         $gte: 80
//         }
//     }
// )

// db.students.find(
//     {
//         city: {
//         $eq: "Gurugram"
//         }
//     }
// )

// db.students.find(
//     {
//         marks: {
//             $gt: 80
//         },
//         city: {
//             $eq: "Delhi"
//         }

//     }
// )

// db.students.find(
//     {
//         $or: [{marks: {$gt: 80}}, {city: {$eq: "Delhi"}}]
//     }
// )

// db.students.find(
//     {},{
//         _id: 0,
//         name: 1,
//         marks: 1,
//         section: 1
        
        
//     }
// )

// db.students.find(
//     {},{
//         // _id: 0,
//         name: 1,
//         marks: 1,
//         section: 1
        
        
//     }
// )

// db.students.find(
//     {section: "D"},{
//         // _id: 0,
//         name: 1,
//         marks: 1,
//         section: 1
        
        
//     }
// )

// db.students.find().limit(3)
// db.students.find().skip(2)
// db.students.find().skip(0).limit(2)
// db.students.find().skip(1).limit(2)
// db.students.find().skip(4).limit(6)

// descending order
// db.students.find().sort({marks: -1})

// ascending order
// db.students.find().sort({marks: 1})

