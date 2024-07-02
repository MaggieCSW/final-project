import { Link } from "react-router-dom"

const Card =(props)=> {

    return(
        
        <div className="col">
            <div className="card h-100">
                <img src={`/images/${props.imgUrl}`} alt={props.name} className="img-fluid image card-img-top my-img"/>
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/${props.path}/${props.id}`} className="card-link-title">
                        {props.name}
                        </Link> 
                    </h2>
                    <h3 className="card-price">
                        ${props.price}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Card