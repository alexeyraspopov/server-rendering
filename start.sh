export NODE_PATH=node_modules:.
export NODE_ENV=development

nodemon --exec babel-node -- index.node.js &
watchify -e index.web.js -t babelify -g envify -o bundle.js -v
