// ProductDetails.js

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductDetails.css';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useContext(CartContext);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    const addToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
        alert("Item has been added to the shopping cart!");
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails;
