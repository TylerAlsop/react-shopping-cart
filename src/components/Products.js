import React, { useContext } from "react";
import ShoppingContext from "../ShoppingContext";



// Components
import Product from './Product';

const Products = props => {
	const {  } = useContext(ShoppingContext);


	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
