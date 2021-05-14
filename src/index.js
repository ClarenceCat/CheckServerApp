// File: index.js
// Description: this is the main entry point of the application
// Date Last Modified: 2021/05/13
// Programmer: Daniel Grew

const findServer = require('./modules/findServer');

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

  findServer(test).then(result => console.log(result)).catch(err => console.log(err))
  findServer(test2).then(result => console.log(result)).catch(err => console.log(err))
  findServer(test3).then(result => console.log(result)).catch(err => console.log(err))
  findServer(test4).then(result => console.log(result)).catch(err => console.log(err))

  