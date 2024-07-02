//  form data (uses useState & useEffect
//  handleChange changes as the user is entering things into form

//  event.target (in) is where youre getting this info from
//  handleSubmit takes all form data and handles it


// import { useId } from "react";






const Form =( { formData, handleChange, handleSubmit } )=> {



    // const id = useId()

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="text-center">sign up for 10% off:</h1>
                <div className="mb-3">
                    <label 
                        htmlFor={'fName'} 
                        className="form-label text-capitalize"
                        >first name
                    </label>
                    <input
                        type="text"
                        id={'fName'}
                        name="fName"
                        value={formData.fName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={'lName'} 
                        className="form-label text-capitalize"
                        >last name
                    </label>
                    <input
                        type="text"
                        id={'lName'}
                        name="lName"
                        value={formData.lName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={'email'} 
                        className="form-label text-capitalize"
                        >email
                    </label>
                    <input
                        type="text"
                        id={'email'}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor={'username'} 
                        className="form-label text-capitalize"
                        >username
                    </label>
                    <input
                        type="text"
                        id={'username'}
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label 
                    // **************************************************************************
                        htmlFor={'password'} 
                        className="form-label text-capitalize"
                        >password
                    </label>
                    <input
                        type="password"
                        id={'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
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

export default Form