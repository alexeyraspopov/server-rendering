import Dispatcher from 'lib/Dispatcher';

export function increment() {
	Dispatcher.dispatch({type: 'COUNTER_INCREMENTED'});
}

export function update(value) {
	Dispatcher.dispatch({type: 'COUNTER_UPDATED', value});
}
