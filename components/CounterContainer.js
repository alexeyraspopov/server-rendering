import React from 'react';
import Container from 'flux/lib/FluxContainer';
import Counter from 'components/Counter';
import CounterStore from 'stores/CounterStore';
import * as CounterActions from 'actions/CounterActions';

class CounterContainer extends React.Component {
	static getStores() {
		return [CounterStore];
	}

	static calculateState() {
		return {
			count: CounterStore.getState()
		};
	}

	render() {
		return <Counter
			count={this.state.count}
			onIncrement={CounterActions.increment}
			onReset={() => CounterActions.restore(0)}/>;
	}
}

export default Container.create(CounterContainer);
