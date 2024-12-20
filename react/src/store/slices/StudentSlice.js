import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
	name: 'student',
	initialState: [],
	reducers: {
		addStudent(state, action) {
			state.push(action.payload);
		},
		removeStudent(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

// Export Action Creators to be used in dispatching
export const { addStudent, removeStudent } = studentsSlice.actions;
// Export combined reducer to be used in configuring store
export const studentReducer = studentsSlice.reducer;
