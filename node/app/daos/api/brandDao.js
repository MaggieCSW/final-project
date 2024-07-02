const con = require('../../config/dbconfig')

const brandDao = {
    table: 'brand',
    


    sort: (req, res, table)=> {
        con.execute(
            `SELECT * FROM ${table}
            ORDER BY brand;`,
            (error, rows)=> {
                if(!error) {
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


module.exports = brandDao