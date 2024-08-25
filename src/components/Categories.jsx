import React from 'react';
import { useState, useEffect } from 'react';
import { json, Link } from 'react-router-dom';
 
const images = [];

export default function List() {



    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products/categories')
    //         .then(res => res.json()
    //             .then(json => setCategories(json)))
    //         .catch(error => console.log('error'));

    // }, []);

  


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json()
                .then(json => setCategories(json)))
            .catch(error => console.error('Error'));
    }, []);

    return (
        <div className="Product-list">
            <div className="cards">
                {categories.map((category, index) => (
                    <Link to={`/category/${category}`} key={index} className="card">
                        <img
                            src={images[index]}
                            alt='no image'
                            className="card-img"
                        />
                        <div className="card-body">
                            <h2 className="card-title">{category}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

