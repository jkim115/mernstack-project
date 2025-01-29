import React, { useState } from 'react';

const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function ATMdispencer() {
	const [amount, setAmount] = useState(0);
	const [message, setMessage] = useState('');

	// Controlled input
	const handleChange = (event) => {
		event.preventDefault();
		const input = parseInt(event.target.value, 10);
		setAmount(input);
	};

	// Calculate # of notes of denominations
	const computeDemonimation = (event) => {
		event.preventDefault();
		let inputAmount = amount;

		let totalNotes = 0;
		let info = 'You will get following amount\n';
		for (let i = 0; i < denominations.length; i++) {
			let denomination = denominations[i];
			let quotient = Math.floor(inputAmount / denomination);

			info += `${quotient} notes of Rs ${denomination}\n`;
			totalNotes += quotient; // Update total number of notes
			inputAmount -= quotient * denomination; // Update inputAmount for next iteration
		}

		info += `Total notes dispensed: ${totalNotes}`;
		setMessage(info); // Set message to display
	};

	return (
		<>
			<form onSubmit={computeDemonimation}>
				<input
					type='number'
					placeholder='Enter amount to withdraw'
					onChange={handleChange}
					value={amount}
				/>
				<button type='submit'>Withdraw</button>
			</form>
			<pre>{message}</pre> {/*To maintain newline characters*/}
		</>
	);
}

export default ATMdispencer;
