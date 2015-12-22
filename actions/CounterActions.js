import Dispatcher from 'lib/Dispatcher';

export function increment() {
	Dispatcher.dispatch({type: 'COUNTER_INCREMENTED'});
}

export function restore(state) {
	if (state) {
		Dispatcher.dispatch({type: 'COUNTER_RESTORED', value: parseInt(state)});
	}
}
