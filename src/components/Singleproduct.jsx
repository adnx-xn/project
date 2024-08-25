import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; 
import navbar from './Navbar';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (


        <div className="product-detail">
            
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <br /> <br /> <br />
            <h3 className='product-description'>product description:-</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                Add to Cart
            </button>

            <button onClick={() => navigate('/cart')} className="go-to-cart-btn">
                Go to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
