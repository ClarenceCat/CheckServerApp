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
    
})
