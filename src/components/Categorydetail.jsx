import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryDetail = () => {
    const { categoryName } = useParams(); 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching products:', error));
    }, [categoryName]);
    console.log(products)
    
    return (
        <div className="Product-list">
            <h1>Products in {categoryName}</h1>
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

export default CategoryDetail;
