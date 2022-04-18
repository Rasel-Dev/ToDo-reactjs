import React from 'react';

const ListItem = ({ id, text, isDone, clickToggle, clickRemove }) => {
	return (
		<div className='flex items-center py-3'>
			<div
				className={`flex-1 font-semibold ${
					isDone ? `line-through text-gray-400` : `text-gray-700`
				}`}
			>
				{text}
			</div>
			<button
				type='button'
				className='mr-2 px-2 bg-green-100 text-green-700 hover:shadow-md uppercase text-sm rounded-md'
				onClick={clickToggle}
			>
				{isDone ? 'undo' : 'done'}
			</button>
			<button
				type='button'
				className='px-2 bg-red-100 text-red-700 hover:shadow-md uppercase text-sm rounded-md'
				onClick={clickRemove}
			>
				Remove
			</button>
		</div>
	);
};

export default ListItem;
