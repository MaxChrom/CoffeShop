import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Story from './Pages/Story'
import Shop from './Pages/Shop'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='Home' element={<Home />} />
                    <Route path='Menu' element={<Menu />} />
                    <Route path='Story' element={<Story />} />
                    <Route path='Shop' element={<Shop />} />
                    {/* <Route path='Cart' element={<Cart />} />
                    <Route path='Checkout' element={<Checkout />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App