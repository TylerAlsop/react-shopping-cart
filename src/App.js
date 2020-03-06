import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ShoppingContext from './ShoppingContext'

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
		<ShoppingContext.Provider value={{ data: data, addItem: addItem, products: products, cart: cart }}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products products={products} addItem={addItem} />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</div>
		</ShoppingContext.Provider>
	);
}

export default App;
