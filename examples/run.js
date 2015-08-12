var TMClient = require('../index.js')
var path = './' + process.argv[2] + '.js';
var c = new TMClient('priidik', 'C7XDKZOQZo6HvhJPtU0MBcWlfqwtp8');

require(path)(c);
