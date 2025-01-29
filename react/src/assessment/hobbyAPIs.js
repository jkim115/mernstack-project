import axios from 'axios';

export const saveHobbyToDB = async (hobby) => {
	try {
		const response = await axios.post('http://localhost:9000/hobby/add', hobby);
		return response.status;
	} catch (error) {
		console.error('Error saving hobby:', error.message);
		return null;
	}
};

export const fetchHobbiesFromDB = async () => {
	try {
		const response = await axios.get('http://localhost:9000/hobby/fetch');
		return response.data;
	} catch (error) {
		console.error('Error fetching hobby:', error.message);
		return null;
	}
};

export const fetchHobbiesByUserId = async (userId) => {
	try {
		const response = await axios.get('http://localhost:9000/hobby/fetch');
		return response.data;
	} catch (error) {
		console.error('Error fetching hobby:', error.message);
		return null;
	}
};