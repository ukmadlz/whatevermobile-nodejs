// Licensed under the Apache License, Version 2.0 (the 'License'); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

'use strict';

// Credentials
var Credentials = require('./Credentials');

// SMS
var Message = require('./Message');

var Client =
/**
 * @param {Credentials} credentials - WhateverMobile Credentials
 * @param {string} credentials.username - the WhateverMobile Username
 * @param {string} credentials.password - the WhateverMobile Password
 * @param {object} options Additional options
 */
function Client(credentials, options) {
  // Validate Credentials
  this._credentials = Credentials.parse(credentials);
  this._options = options;

  // Functionality
  this.message = new Message(this._credentials, this._options);
};

module.exports = Client
