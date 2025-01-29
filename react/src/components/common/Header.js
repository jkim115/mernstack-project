import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
	const user = useSelector((state) => {
		return state.student;
	});

	return (
		<div>
			<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
				<NavLink to='/home' className='navbar-brand'>
					Home
				</NavLink>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<NavLink to='/login' className='nav-link'>
							Log In
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/signup' className='nav-link'>
							Sign Up
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/time' className='nav-link'>
							Time
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/atm' className='nav-link'>
							ATM
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/hobby' className='nav-link'>
							Hobby
						</NavLink>
					</li>

					{user?.length > 0 && (
						<>
							{user[0].name === 'admin' && (
								<li className='nav-item'>
									<NavLink to='/productForm' className='nav-link'>
										ProductForm
									</NavLink>
								</li>
							)}
							<li className='nav-item'>
								<NavLink to='/productList' className='nav-link'>
									Product
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/cart' className='nav-link'>
									Cart
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/coupon' className='nav-link'>
									Coupon
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/order' className='nav-link'>
									Orders
								</NavLink>
							</li>
						</>
					)}
				</ul>
				<div className='ms-auto me-4 text-white'>
					{user?.length > 0 ? `Welcome, ${user[0].name}` : `Hello`}
				</div>
			</nav>
		</div>
	);
}

export default Header;
