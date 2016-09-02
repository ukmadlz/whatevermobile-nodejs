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

// Necessary Dependencies
var _ = require('lodash');
var Request = require('request');

var Message = function(_credentials, _options) {
  return {
    // Send an SMS
    sendSms: function (message, callback) {
      // Validate
      if (!_.isObject(message)) {
        return false;
      }
      // Send SMS
      Request({
        method: 'POST',
        url: 'https://messaging.whatevermobile.com/messaging/1.0/messages',
        headers: {
          'Authorization': 'Basic ' + new Buffer(_credentials.username + ':' + _credentials.password).toString('base64')
        },
        json: true,
        body: message.body,
      }, callback);
    }
  }
}
module.exports = Message;
