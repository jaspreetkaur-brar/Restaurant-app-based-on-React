// src/context/CartContext.js
import React, { createContext, useReducer } from 'react';
import './cartcontext.css';
export const CartContext = createContext();

const initialState = {
    items: [],
    total: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const found = state.items.find(item => item.id === action.payload.id);
            if (found) {
                // Update quantity if item already exists
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                    total: state.total + action.payload.price
                };
            } else {
                // Add new item if not found
                return {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1}],
                    total: state.total + action.payload.price
                };
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price * action.payload.quantity
            };
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                ),
                total: state.items.reduce((total, item) => total + item.price * item.quantity, 0)
            };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};



