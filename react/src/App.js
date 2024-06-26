import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Brands from './components/Brands'
import SingleBrand from './components/SingleBrand'
import CreateAccount from './components/CreateAccount'



const App =()=> {

    const [formData, setFormData] = 
    useState ({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        password: ''
    })


    const handleChange = (event)=> {
        const { name, value, type } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type ===
                
            }
        })
    }


    return (

        <>
            <Header />
                <Routes>
                    <Route path='/' element={ <Home /> } /> 
                    <Route path='/product' element={ <Products /> } />
                    <Route path='/product/:id' element={ <SingleProduct /> } />
                    <Route path='/brand' element={ <Brands /> } />
                    <Route path='/brand/:id' element={ <SingleBrand /> } /> 
                    <Route path='/user' element={ <CreateAccount /> } />
                    <Route path='*' element={ <ErrorPage /> } /> 
                </Routes>
            <Footer />
        </>

    )
}


export default App