import React, { useContext, useState } from 'react';
import TodoContext from '../context/todoContext';
import { ADD_TODO } from '../context/todoActions';

const TodoInput = () => {
	const [input, setInput] = useState('');
	const { dispatch } = useContext(TodoContext);

	const addTodoHandler = () => {
		const todo = {
			id: Math.random(),
			text: input,
			done: false,
		};
		if (input) {
			dispatch({
				type: ADD_TODO,
				payload: todo,
			});
			setInput('');
		}
	};

	return (
		<div className='flex overflow-hidden rounded-md shadow-md bg-white'>
			<input
				type={'text'}
				className='flex-1 px-5 py-4 outline-none'
				placeholder='Todo...'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type='button'
				className='p-3 bg-indigo-400 text-white'
				onClick={addTodoHandler}
			>
				Add Todo
			</button>
		</div>
	);
};

export default TodoInput;
