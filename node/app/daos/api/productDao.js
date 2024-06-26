const con = require('../../config/dbconfig')

const productDao = {
    table: 'product',

    getInfo: (res, table, id)=> {
        con.execute(
            `SELECT 
                p.product_id, 
                p.product_name,    
                b.brand, 
                p.product_image,
                p.price, 
                p.description, 
                p.category
            FROM product p
            JOIN brand b USING (brand_id)
                WHERE product_id = ${id}
                ORDER BY product_id;`,
                (error, rows)=> {
                    if (!error) {
                            res.json(rows)
                    } else {
                        console.log('DAO ERROR', error)
                    }
                }
            )
        }
        
}


module.exports = productDao