// This file is the central point where all things related to redux will be imported

import { configureStore } from '@reduxjs/toolkit';
import {
	addStudent,
	removeStudent,
	studentReducer,
} from './slices/StudentSlice';

const store = configureStore({
	reducer: {
		students: studentReducer,
	},
});

// Export store and re-export addStudent and removeStudent
export { store, addStudent, removeStudent };
