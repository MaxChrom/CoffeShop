import React from 'react'
import { useCustomContexts } from '../Context/ContextsProvider';
import { useState, useEffect } from 'react';
import ProductCart from '../Components/Shop/Cart/ProductCart';
function Cart() {

    const { inCart, setInCart } = useCustomContexts();
    const [totalCost, setTotalCost] = useState(0);
    // const navigate = useNavigate();

    useEffect(() => {
        const updateCost = inCart.reduce(
            (prev, item) => prev + Number(item.qty) * Number(item.price),
            0
        );
        setTotalCost(Number(updateCost).toFixed(2));
    }, [inCart]);

    const handleCheckout = () => {
        // navigate("/checkout");
    };
  return (
        <div className="cart">
            <div className="cart__shopping">
                <h2>Shopping Cart</h2>
                <div className="cart__shopping-products">
                {inCart.length > 0 ? (
                    inCart.map((item, index) => (
                        <ProductCart
                            key={index}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            flavor={item.flavor}
                            manufacturer={item.manufacturer}
                            quantity={item.description}
                            price={item.price}
                        />  
                ))):""}
                  
                </div>
            </div>
            <div className="cart__summarty">
                <h3>Summary</h3>
            </div>
        </div>
  )
}

export default Cart