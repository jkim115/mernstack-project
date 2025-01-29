import React, { useEffect, useState } from 'react';

function Time() {
	const [time, setTime] = useState('');

	// On mount, call setInterval() to update time every second
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString()); // Format the time
		}, 1000);
		// On unmount, clear the interval so there's no memory leak
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='d-flex justify-content-center align-items-center mt-5'>
			{time}
		</div>
	);
}

export default Time;
