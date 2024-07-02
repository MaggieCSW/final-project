import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
// import Brands from './components/Brands';
// import SingleBrand from './components/SingleBrand';
import Form from './components/Form';
import Card from './components/Card'



const App =()=> {

    const [formData, setFormData] = 
    useState ({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''
    })


    const handleChange = (e)=> {
        const { name, value } = e.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
                
            }
        })
    }





    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(formData)
        axios ({
            method: 'post',
            url: 'http://localhost:3005/api/user/create',
            data: formData
        })
    }



    



    return (

        <>
            <Header />
                <Routes>
                    <Route path='/' element={ <Home /> } /> 
                    <Route path='/product' element={ <Product /> } />
                    <Route path='/:path/:id' element={ <SingleProduct /> } />
                    <Route path='/product' element={ <Card /> } />
                    <Route path='/user' element={ 
                        <Form 
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        /> } />
                
                    <Route path='*' element={ <ErrorPage /> } /> 
                </Routes>
            <Footer />
        </>

)
}


export default App



{/* <Route path='/brand' element={ <Brands /> } /> */}
{/* <Route path='/brand/:id' element={ <SingleBrand /> } />  */}