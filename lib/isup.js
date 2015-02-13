'use strict';

var requestPromise = require('request-promise');

var SERVER_URL = 'http://isup.me/';

function isUp(url) {
    return requestPromise(SERVER_URL + url).then(function(body) {
        return body.indexOf('It\'s just you') !== -1;
    });
}

module.exports = isUp;
