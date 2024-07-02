import { Link } from 'react-router-dom'


const Header =()=> {


    return(

        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="header text-capitalize text-md-center display-2"></h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-between text-capitalize">
                            <Link to='/'>home</Link>
                            <Link to='/user'>create account</Link>
                            <Link to='/product'>view collection</Link>
                            {/* <Link to='/brand'>shop by brand</Link> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header