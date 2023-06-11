import React from "react";
import './products.css';

function Product() {
	return (
	<div className="products">
		<h6 className="thenavigo">external css class</h6>
		<p id="product">external id css !</p>
		<h2 style={{color: "red"}}> inline css</h2>
	</div>
	)
}

export default Product;