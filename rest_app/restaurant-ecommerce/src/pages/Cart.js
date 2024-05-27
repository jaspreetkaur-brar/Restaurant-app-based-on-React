import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './cart.css';

function Cart() {
    const { state, dispatch } = useContext(CartContext);

    const handleRemove = (id, price, quantity) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id, price, quantity } });
    };

    const handleQuantityChange = (id, price, quantity) => {
        dispatch({ type: 'UPDATE_ITEM', payload: { id, quantity } });
    };

    const handlePlaceOrder = () => {
        alert("Your meal will be with you soon!");
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <h3>Total: ${state.total.toFixed(2)}</h3>
            </div>
            <ul className="cart-items">
                {state.items.map(item => (
                    <li key={item.id} className="cart-item">
                        <div className="cart-item-details">
                            <h4 className="cart-item-name">{item.name}</h4>
                            <p className="cart-item-price">${item.price} x {item.quantity}</p>
                        </div>
                        <div className="cart-item-actions">
                            <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, item.price, item.quantity + 1)}>+</button>
                            <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, item.price, Math.max(1, item.quantity - 1))}>-</button>
                            <button className="remove-btn" onClick={() => handleRemove(item.id, item.price, item.quantity)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            {state.items.length > 0 && <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>}
        </div>
    );
}

export default Cart;
