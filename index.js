var _ = require('lodash');

var Controller = require('./lib/Controller.js');
var HttpClient = require('./lib/HttpClient.js');

function TMRestClient(userName, apiKey, options) {
    var defaults = {
        host: 'rest.textmagic.com',
        version: 'v2',
        agent: 'textmagic-rest-nodejs/0.02',
        language: 'en;q=1',
        webpack:false
    };

    if (!userName || !apiKey) {
        throw ('No username or token supplied.');
    }

    this.options = _.assign(defaults, options);

    var httpOptions = {
        hostname: this.options.host,
        port: 443,
        path: '/api/' + this.options.version + '/',
        method: 'GET',
        headers : {
            'user-agent': this.options.agent,
            'accept-language': this.options.language,
            'x-tm-key': apiKey,
            'x-tm-username': userName
        }
    };

    var http = new HttpClient(httpOptions);
    if (this.options.webpack) {
        var a = new Controller(http, require('./resources/webpack.js'), this, true);
    } else {
        var a = new Controller(http, require('./resources/index.js'), this, false);
    }


}

TMRestClient.prototype.host = function () {
    return 'https://' +  this.options.host ;
};

module.exports = TMRestClient;
module.exports.auth = function(userName, apiKey) {
    return new TMRestClient(userName, apiKey);
};