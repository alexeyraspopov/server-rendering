import ReduceStore from 'flux/lib/FluxReduceStore';
import Dispatcher from 'lib/Dispatcher';

class CounterStore extends ReduceStore {
	getInitialState() {
		return 0;
	}

	reduce(state, action) {
		switch (action.type) {
		case 'INCREMENTED':
			return state + 1;
		case 'COUNTER_RESTORED':
			return action.value;
		default:
			return state;
		}
	}
}

export default new CounterStore(Dispatcher);
