const con  = require('../../config/dbconfig')



const userDao = {
    table: 'user',



// create: (req, res, table)=> {
//     if(Object.keys(req.body).length === 0) {
//         res.json({
//             "error": true,
//             "message": "No fields to create"
//     })
//     } else {
//         const fields = Object.keys(req.body)
//         const values = Object.values(req.body)


//         con.execute(
//             `INSERT INTO ${table}
//             SET ${fields.join(' = ?, ')} = ?;`,
//             values,
//             (error, dbres)=> {
//                 if (!error) {
//                     res.send(`Last id: ${dbres.insertId}`)
//                 } else {
//                     console.log('DAO ERROR:', error)
//                     res.send('Error creating record')
//                 }
//             }
//         )
//     }
// },

findAll: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table};`, 
            (error, rows)=> {
                if (!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

getInfo: (res, table, id)=> {
    con.execute(
        `SELECT
            user_id, 
            fName, 
            lName,    
            email, 
            username,
            password
        FROM user
            ORDER BY lName, fName;`,
            (error, rows)=> {
                if (!error) {
                        res.json(rows)
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    },



    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM user ORDER BY lName, fName;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    }

}


module.exports = userDao 