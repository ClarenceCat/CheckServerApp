// file: findServerTests.js
// description: This file contains all of the tests for the findServer module
// Date Last Modified: 2021/05/16
// Programmer: Daniel Grew

const { expect } = require('chai');
const chai = require('chai');
const { findServer, checkServer } = require('../src/modules/findServer');

// we are going to use should declarations
chai.should();

// define test lists to use 
const test = [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boldtech.co",
      "priority": 7
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://google.com",
      "priority": 4
    }
  ];

  const test2 = [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boladwaddtech.co",
      "priority": 7
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://gsaddoogle.com",
      "priority": 4
    }
  ];

  const test3 = [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boldtech.co",
      "priority": 2
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://google.com",
      "priority": 4
    }
  ];

  const test4 = [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boldtech.co",
      "priority": 4
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://google.com",
      "priority": 4
    }
  ];

  test5 = [];

  test6 = [
    {
      "usrl": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boldtech.co",
      "priority": 4
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://google.com",
      "priority": 4
    }
  ];

// test the checkServer function
describe('Test checkServer()', () => {
    // TEST 1 
    // Function: checkServer()
    // Description: This test will test the happy path for a server that exists 
    // Expected return: the server's details
    describe('Test 1 - checkServer() with Online server', () => {
        const test_online =     {
            "url": "http://google.com",
            "priority": 4
          }

          it('Should check if google.com is online and return the object that was passed in', (done) => {
              checkServer(test_online).then(res => {
                expect(res).to.be.an('object').eq(test_online);
                done();
              }).catch(done)
          })
    })

    // TEST 2
    // Function: checkServer()
    // Description: This test will test the happy path for a server that does not exist
    // Expected return: null
    describe('Test 2 - checkServer() with Offline server', () => {
        const test_online =     {
            "url": "http://gooasdawgle.com",
            "priority": 4
          }

          it('Should check if google.com is online and return null', (done) => {
              checkServer(test_online).then(res => {
                expect(res).to.be.eq(null);
                done();
              }).catch(done)
          })
    })
})

// test the findServer function
describe('Test findServer()', () => {
    // TEST 3
    // Function: findServer()
    // Description: This test will test the happy path for a list of servers 
    // Expected return: { "url": "http://google.com","priority": 4 }
    describe('Test 3 - Test the findServer for list containing at least one online server', () => {
        it('Should return { "url": "http://google.com","priority": 4 }', (done) => {
            findServer(test).then( res => {
                expect(res).to.be.an('object').eq(test[3])
                done();
            }).catch(done)
        })
    })
    
    // TEST 4
    // Function: findServer()
    // Description: This test will test the happy path for a list of servers that all do not exist
    // Expected return: Error
    describe('Test 4 - Test the findServer for list containing no online servers', () => {
        it('Should throw an error', (done) => {
            findServer(test2).then(done()).catch(err => {
                expect(err).to.be.an('error').eq(new Error("None of the servers are online"));
                done();
            })
        })
    })
    // TEST 5
    // Function: findServer()
    // Description: This test will test the happy path for a list of servers two of which exist
    // Expected return: { "url": "http://boldtech.co","priority": 2 }
    describe('Test 5 - Test the findServer for list containing at least one online server', () => {
        it('Should return { "url": "http://boldtech.co","priority": 2 }', (done) => {
            findServer(test3).then( res => {
                expect(res).to.be.an('object').eq(test3[1])
                done();
            }).catch(done)
        })
    })

    // TEST 6
    // Function: findServer()
    // Description: This test will test the happy path for a list of servers two of which exist
    // Expected return: { "url": "http://boldtech.co","priority": 2 }
    describe('Test 6 - Test the findServer for list containing two online servers with the same priority', () => {
        it('Should return { "url": "http://google.com","priority": 4 }', (done) => {
            findServer(test4).then( res => {
                expect(res).to.be.an('object').eq(test4[3])
                done();
            }).catch(done)
        })
    })

    // TEST 7
    // Function: findServer()
    // Description: This test will test the function when an empty list is passed
    // Expected return: Error
    describe('Test 7 - Test the findServer for list containing no online servers', () => {
        it('Should throw an error', (done) => {
            findServer(test5).then(done()).catch(err => {
                expect(err).to.be.an('error').eq(new Error("None of the servers are online"));
                done();
            })
        })
    })

    // TEST 8
    // Function: findServer()
    // Description: This test will test the function when an object containing an incorrect element is passed
    // Expected return: Error
    describe('Test 8 - Test the findServer using a function containing an incorrect element', () => {
        it('Should throw an error', (done) => {
            findServer(test5).then(done()).catch(err => {
                expect(err).to.be.an('error').eq(new Error("The Server Details object is missing required details about the server"));
                done();
            })
        })
    })
})

