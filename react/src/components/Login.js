import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveStudentToDB } from '../store/actions';

function Login({ students, addStudent }) {
	let [student, updateStudent] = useState({ name: '', password: '' });

	const handleTextChange = (event) => {
		let target = event.target;
		let classList = target.classList;

		// Update state according to user input
		updateStudent((prevState) => ({
			...prevState,
			name: classList.contains('username') ? target.value : prevState.name,
			password: classList.contains('password')
				? target.value
				: prevState.password,
		}));
	};

	const handleLogin = (event) => {
		let loggingStudent = { name: student.name, password: student.password };

		// TODO: save student to DB
		saveStudentToDB(loggingStudent);
	};

	return (
		<div className='d-flex justify-content-center align-items-center mt-5'>
			<form>
				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='text'
						className='form-control username'
						placeholder='Enter username'
						onChange={handleTextChange}
					/>
				</div>

				<div data-mdb-input-init className='password form-outline mb-4'>
					<input
						type='password'
						className='form-control password'
						placeholder='Enter password'
						onChange={handleTextChange}
					/>
				</div>

				<button
					type='button'
					data-mdb-button-init
					data-mdb-ripple-init
					className='btn btn-primary btn-block mb-4 w-100'
					onClick={handleLogin}>
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

let mapStateToProps = (store) => {
	return {
		students: store.students,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		addStudent: (student) => {
			dispatch({
				type: 'students/addStudent',
				payload: student,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
