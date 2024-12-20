import axios from 'axios';

// redux hooks cannot be used here, as the function is not a component
export const saveStudentToDB = async (student) => {
	const statusCode = await axios
		.post('http://localhost:9000/student/signup', student)
		.then((res) => {
			return res.status;
		})
		.catch((error) => {
			// We need a catch block; otherwise, it will direct to error page
			return error.status;
		});

	return statusCode;
};

export const authenticateStudent = async (student) => {
	const statusCode = await axios
		.post('http://localhost:9000/student/login', student)
		.then((res) => {
			return res.status;
		})
		.catch((error) => {
			return error.status;
		});

	return statusCode;
};
