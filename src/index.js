// File: index.js
// Description: This module contains the code which has the findServer() function
// Date Last Modified: 2021/05/13
// Programmer: Daniel Grew

// declare dependencies 
const http = require("http");

// function: findServer()
// Parameters: server_list : [{ url, priority }]
// Description: This function takes a list of objects containing a sever url and the priority of the server and finds the server
//          that is online, which has the lowest priority.
// Returns: Promise(resolve, reject) - a promise with the object containing the url and priority of the server that has been found
//          or a rejection if none of the servers are online.
function findServer(server_list) {
    // declare options used for the requests
}