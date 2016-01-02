import ReduceStore from 'flux/lib/FluxReduceStore';
import Dispatcher from 'lib/Dispatcher';
import {CounterActionTypes as ActionTypes} from 'shared/FluxConstants';

class CounterStore extends ReduceStore {
	getInitialState() {
		return 0;
	}

	reduce(state, action) {
		switch (action.type) {
		case ActionTypes.COUNTER_INCREMENTED:
			return state + 1;
		case ActionTypes.COUNTER_UPDATED:
			return action.value;
		default:
			return state;
		}
	}
}

export default new CounterStore(Dispatcher);
