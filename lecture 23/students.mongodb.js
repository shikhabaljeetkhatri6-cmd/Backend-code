use("UniversityDB")
//db.students.find()

// db.students.aggregate(
//     [
//         {
//             $match: {
//                 course: " BCA"
//             }
//         }
//         ,{
//             $project: {
//                 name:1,
//                 section:1,
//                 marks:1,
//                 semester:1,
//                 _id:0
//             }
//         }
//         ,{
//             $group: {
//                 _id: "$semester",
//                 totalMarks: {$sum: "$marks"},
//                 averageMarks: {$avg: "$marks"},
//                 maxMarks: {$max: "$marks"},
//                 minMarks: {$min: "$marks"},
//             }
//         }
//     ]
// )
    

db.students.aggregate(
    [
        {
            $match: {
                marks: {$gt: 80}
            }
        }
        ,{
            $project: {
                name:1,
                section:1,
                marks:1,
                semester:1,
                city:1,
                _id:0
            }
        }
        ,{
            $group: {
                _id: "$city",
                totalMarks: {$sum: "$marks"},
                averageMarks: {$avg: "$marks"},
                maxMarks: {$max: "$marks"},
                minMarks: {$min: "$marks"},
            }
        }
    ]
)