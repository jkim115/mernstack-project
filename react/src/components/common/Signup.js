import React, { useEffect, useState } from 'react';
import { saveStudentToDB } from '../api';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../store';
import { NavLink } from 'react-router-dom';
import { fetchHobbiesFromDB } from '../../assessment/hobbyAPIs';

function Signup() {
	const [student, setStudent] = useState({
		name: '',
		password: '',
		address: '',
		hobbies: [],
	});
	const [message, setMessage] = useState('');
	const [hobbies, setHobbies] = useState([]);

	// Controlled input
	const handleInputChange = (event) => {
		const classList = event.target.classList;

		if (classList.contains('name')) {
			// We need to first spread current state; otherwise, password will be overwritten
			setStudent({ ...student, name: event.target.value });
		} else if (classList.contains('password')) {
			setStudent({ ...student, password: event.target.value });
		} else if (classList.contains('address')) {
			setStudent({ ...student, address: event.target.value });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const statusCode = await saveStudentToDB(student);

		if (statusCode === 200) {
			// Display success message
			setMessage('Signed up successfully!');
		} else if (statusCode === 403) {
			// Display error message
			setMessage('The student name already exists.');
		}
	};

	// Handle checkbox change
	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target;

		setStudent((prevStudent) => ({
			...prevStudent,
			hobbies: checked
				? [...prevStudent.hobbies, value] // Add hobby
				: prevStudent.hobbies.filter((hobby) => hobby !== value), // Remove hobby
		}));
	};

	useEffect(() => {
		const fetchHobbies = async () => {
			const hobbyList = await fetchHobbiesFromDB();
			console.log(hobbyList);
			if (hobbyList) {
				setHobbies(hobbyList);
			}
		};
		fetchHobbies();
	}, []);

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

				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='text'
						className='form-control address'
						placeholder='Enter your address'
						value={student.address}
						onChange={handleInputChange}
					/>
				</div>

				<div className='mb-4'>
					<label className='form-label'>Select Hobbies:</label>
					{hobbies.map((hobby) => (
						<div key={hobby._id} className='form-check'>
							<input
								type='checkbox'
								className='form-check-input'
								value={hobby.name}
								checked={student.hobbies.includes(hobby.name)}
								onChange={handleCheckboxChange}
							/>
							<label className='form-check-label'>{hobby.name}</label>
						</div>
					))}
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
