import React from 'react';
import CounterContainer from 'Counter/CounterContainer';
import Distribution from 'Distribution/Distribution';

export default function App({values}) {
	return (
		<section>
			<Distribution values={values} />
			<CounterContainer />
		</section>
	);
}
