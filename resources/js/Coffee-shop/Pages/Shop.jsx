import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react'
import '../Styles/Shop.scss'
import Category from '../Components/Shop/Category';
import ProductItem from '../Components/Shop/ProductItem';
import CircularProgress from '@mui/material/CircularProgress';


function Coffee() {
    const [categories, setCategories] = useState(null)
    const [products, setProducts] = useState(null)
    console.log(products)
    const [activeIndex, setActiveIndex] = useState(-1);

    const loadData = async() => {
        const responseCategories = await axios.get('/api/categories')
        setCategories(responseCategories.data)
        const responseProducts = await axios.get('/api/products')
        setProducts(responseProducts.data)
    }
    useEffect(() => {
        loadData()
    }, [])


    
    return (
        <div className="shop__category">



            {categories ? (
                categories.map((oneCategory, index) => {
                    return(

                    <Category
                        title={oneCategory.name}
                        test ={oneCategory.id}
                        isActive={activeIndex === index}
                        onShow={() => activeIndex == index ? setActiveIndex(-1) : setActiveIndex(index)}
                    >
                        <div className='shop__category-item'>
                            {products ? (
                                        products.filter((product) => {
                                            return product.category_id == oneCategory.id
                                        }).map((product, index) => {
                                        return( 
                                            <ProductItem name = {product.name} discription = {product.discription} flavor = {product.flavor} 
                                            manufacturer = {product.manufacturer} price = {product.price}
                                            />          
                                        )
                                        })
                                    ) : (
                                        <div className="loader">
                                            <CircularProgress color="inherit" />
                                        </div>
                                        
                                    )
                            }
                        </div>

                    </Category>
                    )
                })
            ): (<div className="loader">
                    <CircularProgress color="inherit" />
                </div>)}

            {/* <Category
                title="Coffee"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                COFFESS
            </Category>
            <Category
                title="Accessories"
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
            >
                ACCESSORIES
            </Category>
            <Category
                title="Merch"
                isActive={activeIndex === 3}
                onShow={() => setActiveIndex(3)}
            >
                MERCH
            </Category> */}
        </div>
    );


}

export default Coffee
