// import { useState, useEffect } from "react"
// import axios from 'axios'
// import Card from "./Card"

// const brands =()=> {

//     const [ brands, setbrands ] = useState([])

//     useEffect(()=> {
//         axios.get('http://localhost:3005/api/brand')
//             .then(res => {
//                 setbrands(res.data)
//             })
//     }, [])

//     const brandCards = brands.map(brand => {
//         return <Card
//             key={brand.brand_id}
//             id={brand.brand_id}
//             name={brand.brand}
//             imgUrl={brand.imgUrl}
//             path={'/brand'}
//         />
//     })

//     return(
//         <main className="main" id="mainHome">
//             <div className="container">
//                 <div className="row">
//                     <h2>brands</h2>
//                     <div className="row row-cols-1 row-cols-md-4 g-4">
//                         { brandCards }
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default brands


const Brands =()=> {


    return(
        <>
            <div className="container">
                <div className="col">
                    <h2 className="brandHeader">hot brands</h2>
                </div>

            </div>
        </>

    )
}

export default Brands