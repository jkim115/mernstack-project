import '../node_modules/bootstrap/dist/css/bootstrap.css'; // Bootstrap css
import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Login from './components/common/Login';
import Signup from './components/common/Signup';
import Home from './components/common/Home';
import Header from './components/common/Header';
import ProductForm from './components/product/ProductForm';
import ProductList from './components/product/ProductList';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Coupon from './components/coupon/Coupon';
import OrderList from './components/order/OrderList';
import OrderSuccess from './components/order/OrderSuccess';
import Time from './assessment/Time';
import ATMdispencer from './assessment/ATMdispencer';
import Hobby from './assessment/Hobby';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/productForm' element={<ProductForm />} />
				<Route path='/productList' element={<ProductList />} />
				<Route path='/cart' element={<Cart isCheckout={false} />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/coupon' element={<Coupon />} />
				<Route path='/order' element={<OrderList />} />
				<Route path='/orderSuccess' element={<OrderSuccess />} />
				<Route path='/time' element={<Time />} />
				<Route path='/atm' element={<ATMdispencer />} />
				<Route path='/hobby' element={<Hobby />} />
			</Routes>
		</Router>
	);
}

export default App;
