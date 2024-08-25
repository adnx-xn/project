import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate(); 



    const Buy = () => {
        alert('checkout...hehehehe');
        clearCart();
    };

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            { (
                <div className="cart-items">
                    {cart.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <img src={product.image} alt={product.title} className="cart-item-img" />
                            <div className="cart-item-info">
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                                <button onClick={() => removeFromCart(product.id)} className="remove-from-cart-btn">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <button onClick={() => navigate('/home')} className="go-to-cart-btn">
              Go back to Home
            </button>

            <button onClick={Buy} className="buy-btn">
                Buy
            </button>
        </div>
    );
};

export default Cart;
