import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';

const TodoState = ({ children }) => {
	const initialState = {
		todos: [],
	};
	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoState;
