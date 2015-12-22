import {ReduceStore} from 'flux/utils';
import Dispatcher from 'lib/Dispatcher';

class CounterStore extends ReduceStore {
	getInitialState() {
		return 0;
	}

	reduce(state, action) {
		switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		default:
			return state;
		}
	}
}

export default new CounterStore(Dispatcher);
