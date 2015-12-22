import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import CounterStore from 'stores/CounterStore';
import * as CounterActions from 'actions/CounterActions';

ReactDOM.render(<App />, document.querySelector('main'));

CounterStore.addListener(() => localStorage.setItem('counter', CounterStore.getState()));
CounterActions.restore(localStorage.getItem('counter'));
