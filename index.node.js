import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import Morgan from 'morgan';
import App from 'components/App';

const app = Express();

function layout(markup) {
	return `<!doctype html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
	<main>${markup}</main>
	<script src="vendor.js"></script>
	<script src="bundle.js"></script>
</body>
</html>`;
}

app.use(Morgan('common'));
app.use(Express.static('.'));
app.get('/*', (req, res) => res.send(layout(ReactDOMServer.renderToString(<App />))));

app.listen(3000);
