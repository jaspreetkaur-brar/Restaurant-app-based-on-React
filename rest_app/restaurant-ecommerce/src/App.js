// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetails';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <header>
                        <div className="container">
                            <div className="header-links">
                            <h1>KITCHEN CORNER</h1>
                                <Link to="/" className="header-link">Home</Link>
                                <Link to="/cart" className="header-link">
                                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                </Link>
                            </div>
                        </div>
                    </header>
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product/:productId" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>
                </div>
            </Router>
            <footer>
                <div className="container">
                    &copy; 2024 Our Restaurant. All rights reserved.
                </div>
            </footer>
        </CartProvider>
    );
}

export default App;
