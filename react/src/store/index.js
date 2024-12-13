import { configureStore, createSlice } from '@reduxjs/toolkit';

// Use createSlice() to avoid having to write out boilerplate
// code: actionTypes, switch case statement, and combineReducer()
const studentsSlice = createSlice({
	name: 'students',
	initialState: [],
	reducers: {
		addStudent(state, action) {
			state.push(action.payload);
		},
		removeStudent(state, action) {
			//
		},
	},
});

const store = configureStore({
	reducer: {
		students: studentsSlice.reducer,
	},
});

export { store };

// testing
const startingState = store.getState();
console.log(startingState);

store.dispatch({
	// No need to define actionType and switch case statement
	type: 'students/addStudent',
	payload: {
		name: 'Jay',
		password: 'asdf',
	},
});

console.log(store.getState());
