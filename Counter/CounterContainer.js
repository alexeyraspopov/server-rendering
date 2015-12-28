import React from 'react';
import Container from 'flux/lib/FluxContainer';
import Counter from './Counter';
import CounterStore from './CounterStore';
import * as CounterActions from './CounterActions';

class CounterContainer extends React.Component {
	static getStores() {
		return [CounterStore];
	}

	static calculateState() {
		return {
			count: CounterStore.getState(),
		};
	}

	render() {
		return <Counter
			count={this.state.count}
			onIncrement={CounterActions.increment}
			onReset={() => CounterActions.update(0)}/>;
	}
}

export default Container.create(CounterContainer);
