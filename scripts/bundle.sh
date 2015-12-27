export NODE_PATH=node_modules:.
export NODE_ENV=production

rm -rf bundle
mkdir bundle

browserify -e index.node.js -t babelify -g envify --bare -o bundle/server.js
browserify -r react -r react-dom -g envify -o bundle/vendor.js
browserify -e index.web.js -x react -x react-dom -t babelify -g envify -o bundle/client.js
