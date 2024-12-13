import React from 'react';

function Signup() {
	return (
		<div className='d-flex justify-content-center align-items-center mt-5'>
			<form>
				<div>
					<h2 class='fw-bold mb-4'>Sign up now</h2>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Enter username'
					/>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<input
						type='password'
						className='form-control'
						placeholder='Enter password'
					/>
				</div>

				<button
					type='button'
					data-mdb-button-init
					data-mdb-ripple-init
					className='btn btn-primary btn-block mb-4 w-100'>
					Sign up
				</button>
			</form>
		</div>
	);
}

export default Signup;
