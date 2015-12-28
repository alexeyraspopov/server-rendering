import React from 'react';
import CounterContainer from 'Counter/CounterContainer';
import Distribution from 'Distribution/Distribution';
import {range} from 'd3-array';
import {bates} from 'd3-random';

export default function App() {
	const values = range(0, 1000).map(bates(10));

	return (
		<section>
			<Distribution values={values} />
			<CounterContainer />
		</section>
	);
}
