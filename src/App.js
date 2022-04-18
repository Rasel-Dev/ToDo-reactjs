import TodoState from './context/todoState';
import './App.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList/index';

function App() {
	return (
		<div className='min-h-screen bg-indigo-100 flex items-center justify-center'>
			<div className='w-full md:w-2/4 m-auto'>
				<h2 className='mb-12 text-5xl font-bold italic text-center text-indigo-900'>
					ToDo
				</h2>
				<TodoState>
					<TodoInput />
					<TodoList />
				</TodoState>
			</div>
		</div>
	);
}

export default App;
