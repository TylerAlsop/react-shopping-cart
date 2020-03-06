import React, { useContext } from "react";
// import ShoppingContext from "../contexts/ProductContext";



const Item = props => {
	// const {  } = useContext(ShoppingContext);

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
