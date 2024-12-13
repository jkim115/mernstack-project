import axios from 'axios';

export const addStudentToStore = (student) => {
	return {
		type: 'students/addStudent',
		payload: student,
	};
};

export const saveStudentToDB = (student) => {
	axios
	.post('http://localhost:9000/student/api/login', student)
	.then((res) => {
		console.log(res)
	})
	
	
	// return (dispatch) => {
	// 	axios
	// 		.post('http://localhost:9000/student/api/login', student)
	// 		.then((collection) => {
	// 			let loggedStudent = collection.data;
	// 			dispatch(addStudentToStore(loggedStudent));
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
};
