import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	console.log("Data in App.js", data);
	console.log("products in App.js", products);


	const addItem = item => {
		console.log("Item in addItem()", item)
		// add the given item to the cart
		setCart([...cart, item])
	};

	console.log("Cart in App.js", cart)

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart }}>

				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;


{/* <ProductContext.Provider value={{ data: data, addItem: addItem, products: products, cart: cart }}> */}
