export NODE_PATH=node_modules:.
export NODE_ENV=development

BABEL_ENV=production nodemon --exec babel-node -- index.node.js &
browserify -r react -r react-dom -o vendor.js
watchify -e index.web.js -x react -x react-dom -t [ babelify --sourceMapRelative . ] -p browserify-hmr -g envify -o bundle.js -dv
