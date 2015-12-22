import React from 'react';

export default function Counter({count, onIncrement}) {
	return (
		<div>
			<p>{count}</p>
			<button onClick={onIncrement}>+</button>
		</div>
	);
}
