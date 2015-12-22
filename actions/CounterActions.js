import Dispatcher from 'lib/Dispatcher';

export function increment() {
	Dispatcher.dispatch({type: 'INCREMENT'});
}
