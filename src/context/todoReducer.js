import { ACTION_TODO, ADD_TODO, REMOVE_TODO } from './todoActions';

const todoReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, payload],
			};
		case ACTION_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === payload.id
						? { ...todo, done: !todo.done }
						: todo,
				),
			};
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload.id),
			};
		default:
			return state;
	}
};

export default todoReducer;
