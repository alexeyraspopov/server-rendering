import {dispatch} from 'lib/Dispatcher';
import {CounterActionTypes as ActionTypes} from 'shared/FluxConstants';

export function increment() {
	return dispatch({type: ActionTypes.COUNTER_INCREMENTED});
}

export function update(value) {
	return dispatch({type: ActionTypes.COUNTER_UPDATED, value});
}
