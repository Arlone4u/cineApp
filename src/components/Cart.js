import React, { Fragment, useState, useEffect} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import CartItem from './CartItem';
import {useHistory} from 'react-router-dom';

const Cart = ({products, changeQuantity}) => {

    const [classActive, toggleClass] = useState(false);
    const [sum, setSum] = useState(0);
    const [quant,setQuant] = useState(0);
    const history = useHistory();
    const handleOnClick = () => history.push('/login');

    const toggleButton = () => {
        toggleClass(!classActive);        
    }

    useEffect(() => {
        let total = 0;
        let numquant = 0;
        for(var i = 0; i < products?.length ; i++) {
            total += products[i].price*products[i].quantity;
            numquant += products[i].quantity;
        }
        setSum(total);
        setQuant(numquant);
    }, [products])

    const checkout = () => {
        alert(`Checkout - Subtotal: PHP ${sum.toFixed(2)}`)
    }

    return (
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""} data-testid="navcart">
                <div className="sidebar-content">
                    <div className="toggle-btn" onClick={toggleButton}>
                    <FaShoppingCart />
                        <i>{quant}</i>
                    </div>
                   
                    
                    <div className="cart-content">
                    <h3>
                        <img src="https://res.cloudinary.com/dkcpu9uv8/image/upload/v1671370636/black-shopping-cart-icon-22_bs6vef.png" alt="cart" />
                        Your  Movie Cart
                    </h3> 
                    <div className="cart-list" data-testid="cart">
                        {
                            products?.length === 0 
                            ? 
                            <div className="empty-cart">
                                <p> Your Cart is Empty!!!</p>
                            </div> 
                            :
                            products?.map(product => {
                                return (
                                    <CartItem 
                                        key={product.id} 
                                        product={product} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                    </div>

                    <div className="checkout-div" data-testid="checkout">
                        <div className="checkout">
                                <div className="subtotal-div">
                                    <p className="subtotal">SUBTOTAL</p>
                                    <p className="subtotal-price">PHP {sum.toFixed(2)}</p>
                                </div>
                            <button className="checkout-btn" data-testid="checkoutbtn" onClick={handleOnClick}>CHECKOUT</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;