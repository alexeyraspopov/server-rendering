export NODE_PATH=node_modules:.

nodemon --exec babel-node -- index.node.js &
watchify -e index.web.js -t babelify -o bundle.js -v
