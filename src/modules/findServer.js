// file: findServer.js
// description: This module contains the code which has the findServer() function
// Date Last Modified: 2021/05/13
// Programmer: Daniel Grew

// declare dependencies 
const http = require("http");

// retrieve constants from constants file
  const { REQ_TIMEOUT, REQ_PORT } = require('../../config/constants');

// function: findServer()
// Parameters: server_list : [{ url, priority }]
// Description: This function takes a list of objects containing a sever url and the priority of the server and finds the server
//          that is online, which has the lowest priority.
// Returns: Promise(resolve, reject) - a promise with the object containing the url and priority of the server that has been found
//          or a rejection if none of the servers are online.
function findServer(server_list) {
    return new Promise((resolve, reject) => {
        // create list of promises to call an http server
        // let promises = [];

        // loop through server list to create promises for each server details object
        // for(info of server_list) {
        //     // add the promise to the list
        //     promises.push(checkServer(info, REQ_TIMEOUT));
        // }

        // wait for all of the promises to finish running
        Promise.all(server_list.map(server =>  { return checkServer(server, REQ_TIMEOUT) })).then( results => {
            
            // used to hold the server with the lowest priority
            let ret_server = null;

            for(result of results){
                // check if the result is null
                if(!result){
                    continue;
                }
                // check if ret_server is null
                if(!ret_server)
                {
                    // set the ret_server to the current (first) result
                    ret_server = result;
                }
                else{
                    // check if the current result (current server info) has a lower priority
                    if(result.priority <= ret_server.priority){
                        // set new ret_server to the current server info
                        ret_server = result;
                    }
                }
            }
            if(!ret_server)
            {
                reject(new Error("None of the servers are online"));
            }
            else{
                // resolve with the ret_server value - this should hold the server info of the server with the lowest priority
                resolve(ret_server);
            }
        }).catch((err) => {
            // if any of the objects in the server list contains incorrect information
            reject(new Error(err));
        })
    });
}

// function: checkServer
// Parameters: server_details - object containing details about the server - { url, priority }
// Description: makes request to a single server to check if it is online
// Returns: Promise(resolve, reject) - should resolve with an object containing the the server details if the server is online, or null if not online.
function checkServer(server_details, timeout) {
    // return a promise that only resolves
    return new Promise((resolve, reject) => {
        if(!server_details.url || !server_details.priority){
            reject(new Error("The Server Details object is missing required details about the server"));
        }

        // create options to pass to request
        const options = {
            timeout: timeout
        }

        // make an http request 
        http.get(server_details.url, options, (res) => {
            // retrieve the status code from the request
            const statusCode = res.statusCode;
            // check if the status code falls within response range indicating that the server is online
            if(statusCode >= 200 || statusCode < 300){
                // resolve with the server details
                resolve(server_details)
            }
            else{
                // resolve with null
                resolve(null);
            }

        })
        .on('error', (err) => {
            resolve(null);
        })
    })
}

module.exports = findServer;