import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import Morgan from 'morgan';
import App from 'App/App';
import {range} from 'd3-array';
import {bates} from 'd3-random';

const app = Express();
const values = range(0, 1000).map(bates(10));

function layout(markup, data) {
	return `<!doctype html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
	<main>${markup}</main>
	<script src="vendor.js"></script>
	<script>window.INITIAL_DATA=${JSON.stringify(data)}</script>
	<script src="bundle.js"></script>
</body>
</html>`;
}

app.use(Morgan('common'));
app.use(Express.static('.'));
app.get('/*', (req, res) => res.send(layout(ReactDOMServer.renderToString(<App values={values} />), values)));

app.listen(3000);
