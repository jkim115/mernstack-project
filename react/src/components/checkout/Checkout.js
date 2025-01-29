import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../cart/Cart';

function Checkout() {
	const userList = useSelector((state) => state.student);
	const user = userList[0];

	return (
		<div>
			<h3 className='title'>CHECKOUT</h3>
			<div>Username: {user.name}</div>
			<div>Address: {user.address}</div>
			<br />
			<div>
				<Cart isCheckout={true} />
			</div>
		</div>
	);
}

export default Checkout;
