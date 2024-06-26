const con  = require('../../config/dbconfig')



const userDao = {
    table: 'user',


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