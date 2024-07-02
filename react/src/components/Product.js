import { useState, useEffect } from "react"
import axios from "axios" 
import Card from "./Card"

// ***********************************







const Product =()=> {

    const [ product, setProduct ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/api/product')
            .then(res => {
                setProduct(res.data)
            })
    }, [])

    console.log(product)


// ***************************************************************************

const productCards = product.map(product => {
    return <Card

    // key = tableName.colName
            key={product.product_id}
            id={product.product_id}
            name={product.product_name}
            imgUrl={product.product_image}
            price={product.price}
            path={'product'}
    />
})


    

// *******************************************************

    return(
        <>
            <div className="container">
                <div className="col">
                    <h2 className="productHeader">Products</h2>
                </div>
                <div className="row row-cols-y row-cols-md-5 g-4">
                    {productCards}
                </div>
            </div>
        </>

    )
}

export default Product