import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'




    const SingleProduct =()=> {

        const [ item, setItem ] = useState({})

        const params = useParams()
        const url = `http://localhost:3005/api/${params.path}/${params.id}`
    
        useEffect(() => {
            axios.get(url).then(res => setItem(res.data))
        }, [])
    
    
        // console.log(product)
    

    return(

    
            <main className="main">

                <div className="container">
                    <div className="row row-col-1 row-col-md-4 g-4">
                        <h2 className="singleProductHeader">
                            {item.product_name}
                        </h2>
                        <h3 className="single-price">
                            ${item.price} 
                        </h3>
                        <p>
                            {item.description}
                        </p>
                        <img src={`/images/${item.product_image}`} alt={item.product} className="image img-fluid w-25" />
                    </div>
                </div>
            </main>


    )
}

export default SingleProduct