import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
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
	<script src="bundle.js"></script>
</body>
</html>
	`;
}

app.use(Express.static('.'));
app.get('/*', (req, res) => res.send(layout(ReactDOMServer.renderToString(<App />))));
app.listen(3000);
