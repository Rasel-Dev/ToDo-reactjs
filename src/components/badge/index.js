import React from 'react';

const Badge = ({ title, value }) => {
	return (
		<div className='inline-flex items-center my-5 mr-3 text-sm bg-white rounded-md shadow-md overflow-hidden'>
			<span className='px-2 py-0.5 bg-indigo-400 text-white'>
				{title}
			</span>
			<span className='px-2'>{value}</span>
		</div>
	);
};

export default Badge;
