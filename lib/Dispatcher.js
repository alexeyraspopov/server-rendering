import invariant from 'invariant';
import Dispatcher from 'flux/lib/Dispatcher';
import * as Constants from 'shared/FluxConstants';

const list = Object.values(Constants).reduce((a, b) => a.concat(Object.keys(b)), []);
const dispatcher = new Dispatcher();

export default dispatcher;

export function dispatch(action) {
	invariant('type' in action, 'Actions must have type');
	invariant(list.includes(action.type), `Unexpected Action type ${action.type}`);

	dispatcher.dispatch(action);
	return Promise.resolve(action);
}

if (process.env.NODE_ENV === 'development') {
	/* eslint no-console: 0 */
	dispatcher.register(action => console.info(action));
	(global || window).Dispatcher = dispatcher;
}
