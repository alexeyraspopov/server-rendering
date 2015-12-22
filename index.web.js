import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import CounterStore from 'stores/CounterStore';
import Dispatcher from 'lib/Dispatcher';

ReactDOM.render(<App />, document.querySelector('main'));

CounterStore.addListener(() => localStorage.setItem('counter', CounterStore.getState()));

const restoredState = localStorage.getItem('counter');

if (restoredState) {
	Dispatcher.dispatch({type: 'COUNTER_RESTORED', value: restoredState});
}
