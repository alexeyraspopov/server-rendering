import React from 'react';
import {Container} from 'flux/utils';
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
		return <Counter count={this.state.count} onIncrement={CounterActions.increment} />;
	}
}

export default Container.create(CounterContainer);
