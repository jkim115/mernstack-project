import React, { useEffect, useState } from 'react';
import { fetchHobbiesFromDB, saveHobbyToDB } from './hobbyAPIs';

function Hobby() {
	const [hobby, setHobby] = useState('');
	const [hobbies, setHobbies] = useState([]);

	const handleChange = (event) => {
		event.preventDefault();
		setHobby(event.target.value);
	};

	const saveHobby = async (event) => {
		event.preventDefault();
		if (!hobby.trim()) return alert('Please enter a hobby');

		const savedHobby = await saveHobbyToDB({ name: hobby });
		if (savedHobby) {
			alert('Hobby has been saved!');
			setHobby(''); // Clear Hobby stateç
			setHobbies((prevList) => [...prevList, savedHobby]); // Update the hobby list
		}
	};

	// Fetch a list of hobbies from the DB on mount
	useEffect(() => {
		const fetchHobbies = async () => {
			const hobbyList = await fetchHobbiesFromDB();
			console.log(hobbyList)
			if (hobbyList) {
				setHobbies(hobbyList);
				console.log(hobbyList);
			}
		};
		fetchHobbies();
	}, []);
	return (
		<div>
			<form onSubmit={saveHobby}>
				<input type='text' onChange={handleChange} value={hobby}></input>
				<button type='submit'>Save</button>
			</form>
			{hobbies.length > 0 ? (
				<ul>
					{hobbies.map((hobby) => (
						<li key={hobby._id}>{hobby.name}</li>
					))}
				</ul>
			) : (
				<div>No hobby saved</div>
			)}
		</div>
	);
}

export default Hobby;
