'use strict';

const path = require( 'path' );
const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const config = require( '../config/app.js' );
const webpackConfig = require( path.join( process.cwd(), config.paths.configuration + '/webpack.dev' ) );
const history = require( 'connect-history-api-fallback' );
const express = require( 'express' );
const app = new (express)();

/* Environment configuration constant */
const compiler = webpack( webpackConfig );
let serversOptions = compiler.options.plugins[ 2 ].definitions;
let dataServer = JSON.parse( serversOptions[ 'process.env' ].NODE_ENV.SERVER );
let dataENV = JSON.parse( serversOptions[ 'process.env' ].NODE_ENV.ENV );

process.env.NODE_ENV = {
    ENV: dataENV,
    SERVER: dataServer
};

const port = dataServer.port || 3000;
const address = dataServer.address || 'localhost';

app.use( history( {
    verbose: true,
    index: config.paths.assets + '/index.html',
    rewrites: [
        { from: config.paths.bundle, to: '/' + config.paths.bundle },
        { from: /^\/.*$/, to: '/' }
    ],
    disableDotRule: true
} ) );

app.use( webpackDevMiddleware( compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath } ) );
app.use( webpackHotMiddleware( compiler, { reload: true, log: console.log } ) );

app.set( 'address', address );
app.listen( port, ( err ) => {
    if ( err ) {
        console.log( err );
    } else {
        console.info( '==> Wep App server is listening on http://%s:%s/ in your browser.', address, port );
    }
} );
