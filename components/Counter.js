import React from 'react';

export default function Counter({count, onIncrement, onReset}) {
	return (
		<div>
			<p>{count}</p>
			<button onClick={onIncrement}>+</button>
			<button onClick={onReset}>Reset</button>
		</div>
	);
}
