import React, { useContext } from 'react';
import ListItem from './listItem/index';
import TodoContext from '../../context/todoContext';
import { ACTION_TODO, REMOVE_TODO } from '../../context/todoActions';
import Badge from '../badge/index';

const TodoList = () => {
	const { state, dispatch } = useContext(TodoContext);
	return state.todos.length ? (
		<>
			<Badge
				title={'Pending'}
				value={
					state?.todos.filter((todo) => todo.done === false).length
				}
			/>
			<Badge
				title={'Complete'}
				value={state?.todos.filter((todo) => todo.done === true).length}
			/>
			<div className='mb-5 p-3 rounded-md shadow-md bg-white'>
				{state.todos.map((todo) => (
					<ListItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						isDone={todo.done}
						clickToggle={() =>
							dispatch({
								type: ACTION_TODO,
								payload: { id: todo.id },
							})
						}
						clickRemove={() =>
							dispatch({
								type: REMOVE_TODO,
								payload: { id: todo.id },
							})
						}
					/>
				))}
			</div>
		</>
	) : null;
};

export default TodoList;
