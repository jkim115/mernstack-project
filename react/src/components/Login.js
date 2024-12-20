import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authenticateStudent } from './api';

function Login() {
	const [student, setStudent] = useState({ name: '', password: '' });
	const [message, setMessage] = useState('');

	const handleTextChange = (event) => {
		const classList = event.target.classList;

		if (classList.contains('name')) {
			setStudent({ ...student, name: event.target.value });
		} else if (classList.contains('password')) {
			setStudent({ ...student, password: event.target.value });
		}
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		console.log(student);
		let loggingStudent = { name: student.name, password: student.password };

		// Do we need to add the student to the store?

		const statusCode = await authenticateStudent(loggingStudent);

		if (statusCode !== 200) {
			setMessage('Invalid name and password.');
		} else {
			setMessage("You're now logged in!");
			// TODO:
			// Login success => Navigate to Home component.. but how?
		}
	};

	return (
		<div className='d-flex justify-content-center align-items-center mt-5'>
			<form onSubmit={handleLogin}>
				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='text'
						className='form-control name'
						placeholder='Enter username'
						value={student.name}
						onChange={handleTextChange}
					/>
				</div>

				<div data-mdb-input-init className='password form-outline mb-4'>
					<input
						type='password'
						className='form-control password'
						placeholder='Enter password'
						value={student.password}
						onChange={handleTextChange}
					/>
				</div>
				<div className='text-center'>
					<p>{message}</p>
				</div>

				<button
					type='submit'
					data-mdb-button-init
					data-mdb-ripple-init
					className='btn btn-primary btn-block mb-4 w-100'>
					Sign in
				</button>

				<div className='text-center'>
					<p>
						Not a member? <NavLink to='/signup'>Register</NavLink>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Login;
