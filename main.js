exports.company = 'Google';
//  there are two ways of creating global variables in Node.js,
// one uses the global object,
// and the other uses module.exports.
// What is my recommendation? global method for small apps, module.exports for big apps.
//Try not to overuse it, though. Having said that, could there be an alternative solution which doesn't use the global object?
//Yes there is one, and it involves the use of module.exports. Let me demonstrate using an example:
var m = require('./mod');
