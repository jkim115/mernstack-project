import React, { useState } from 'react';
import { saveStudentToDB } from './api';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store';
import { NavLink } from 'react-router-dom';

function Signup() {
	const [student, setStudent] = useState({ name: '', password: '' });
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	// Controlled input
	const handleInputChange = (event) => {
		const classList = event.target.classList;

		if (classList.contains('name')) {
			// We need to first spread current state; otherwise, password will be overwritten
			setStudent({ ...student, name: event.target.value });
		} else if (classList.contains('password')) {
			setStudent({ ...student, password: event.target.value });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const statusCode = await saveStudentToDB(student);

		if (statusCode === 200) {
			// Save the student to the store
			dispatch(addStudent(student));
			// Display success message
			setMessage('Signed up successfully!');
		} else if (statusCode === 403) {
			// Display error message
			setMessage('The student name already exists.');
		}
	};

	return (
		<div className='d-flex justify-content-center align-items-center mt-5'>
			<form onSubmit={handleSubmit}>
				<div>
					<h2 className='fw-bold mb-4 text-center'>Sign up now</h2>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='text'
						className='form-control name'
						placeholder='Enter your name'
						value={student.name}
						onChange={handleInputChange}
					/>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='password'
						className='form-control password'
						placeholder='Enter password'
						value={student.password}
						onChange={handleInputChange}
					/>
				</div>

				<button
					type='submit'
					data-mdb-button-init
					data-mdb-ripple-init
					className='btn btn-primary btn-block mb-4 w-100'>
					Sign up
				</button>
				<div>{message}</div>
				<br />
				<div className='text-center'>
					<NavLink to={'/login'}>Go back to Login Page</NavLink>
				</div>
			</form>
		</div>
	);
}

export default Signup;
