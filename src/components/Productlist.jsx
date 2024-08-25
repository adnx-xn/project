import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';



const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (

        
        <div className="Product-list">
              
            <div className="cards">
                {products.map((product, index) => ( 
                    <Link to={`/product/${product.id}`} key={index} className="card">
                      <img 
                            src={product.image} 
                            alt={product.title} 
                            className="card-img" 
                        />
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p className="card-text">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default ProductList;