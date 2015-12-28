import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App/App';

ReactDOM.render(<App values={window.INITIAL_DATA} />, document.querySelector('main'));
