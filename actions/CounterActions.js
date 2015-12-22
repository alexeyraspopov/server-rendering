import Dispatcher from 'lib/Dispatcher';

export function increment() {
	Dispatcher.dispatch({type: 'INCREMENTED'});
}

export function restore(state) {
	if (state) {
		Dispatcher.dispatch({type: 'COUNTER_RESTORED', value: parseInt(state)});
	}
}
