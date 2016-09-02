'use strict';

var whatevermobile = require('../lib/Client');
var WhateverMobile = new whatevermobile({
  username: 'test',
  password: 'test'
});

WhateverMobile.message.sendSms({
  to: 'you',
  from: 'me',
  body: 'HelloWorld'
}, function(err, resp, body) {
  console.log(body);
});
