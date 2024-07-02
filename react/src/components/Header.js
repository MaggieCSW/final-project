import { Link } from 'react-router-dom'


const Header =()=> {


    return(

        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="header text-capitalize text-md-center">Classy Carryalls</h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-between text-capitalize">
                            <Link to='/' className="top-text">home</Link>
                            <Link to='/user' className="top-text" >create account</Link>
                            <Link to='/product' className="top-text">view collection</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header