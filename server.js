#!/bin/env node

/**
 * Module dependencies.
 */
var app = require('./app');

//var http = require('http');

/**
 * Get port from environment and store in Express.
 */



var port = "8080";


/**
 * Create HTTP server.
 */

//var server = http.createServer(app);
var server = require("http").Server(app);

/**
 * Listen on provided port, on all network interfaces.
 */

 server.listen(port,function(){
  console.log("Servidor on-line http://localhost:8080 - para salir Ctrl+C.");
 });

