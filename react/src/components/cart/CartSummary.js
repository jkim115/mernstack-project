import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function CartSummary({ total, quantity }) {
	return (
		<div>
			<h4>SUMMARY</h4>
			<div>
				<h5>Total price: ${total}</h5>
				<h5>Total amount: {quantity}</h5>
			</div>
		</div>
	);
}

export default CartSummary;
