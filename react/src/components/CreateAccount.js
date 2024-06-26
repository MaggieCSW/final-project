//  form data (uses useState & useEffect
//  handleChange changes as the user is entering things into form

//  event.target (in handleSubmit and handleChange) is where youre getting this info from
//  handleSubmit takes all form data and handles it


import { useId } from "react";




const CreateAccount =(props)=> {



    const id = useId()

    return(
        <div className="container">
            <form className="form" onSubmit={props.handleSubmit}>
                <h1 className="text-center">sign up for 10% off:</h1>
                <div className="mb-3">
                    <label 
                        htmlFor={id + '-firstName'} 
                        className="form-label text-capitalize"
                        >first name
                    </label>
                    <input
                        type="text"
                        id={id + '-firstName'}
                        name="firstName"
                        value={props.firstName}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={id + '-lastName'} 
                        className="form-label text-capitalize"
                        >last name
                    </label>
                    <input
                        type="text"
                        id={id + '-lastName'}
                        name="lastName"
                        value={props.lastName}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={id + '-email'} 
                        className="form-label text-capitalize"
                        >email
                    </label>
                    <input
                        type="text"
                        id={id + '-email'}
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={id + '-userName'} 
                        className="form-label text-capitalize"
                        >username
                    </label>
                    <input
                        type="text"
                        id={id + '-userName'}
                        name="userName"
                        value={props.userName}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={id + '-phone'} 
                        className="form-label text-capitalize"
                        >phone
                    </label>
                    <input
                        type="tel"
                        id={id + '-phone'}
                        name="phone"
                        value={props.phone}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                    // **************************************************************************
                        htmlFor={id + '-password'} 
                        className="form-label text-capitalize"
                        >password
                    </label>
                    <input
                        type="password"
                        id={id + '-password'}
                        name="password"
                        value={props.password}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Confirm</button>
                </div>
            </form>
        </div>

    )

}

export default CreateAccount