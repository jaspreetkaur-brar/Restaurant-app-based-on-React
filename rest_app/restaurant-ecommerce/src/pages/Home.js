// Home.js

import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './home.css';

function Home() {
    const [products, setProducts] = useState([]);
    const { dispatch } = useContext(CartContext);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
        alert("Item has been added to the cart!");
    };

    return (
        <div className="home-container">
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-title">
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
