var users = {
  'pratibha':  { 'age': 21, 'active': true },
  'madhuri':    { 'age': 23, 'active': false },
  'veena': { 'age': 1,  'active': true }
};

const _ = require('lodash');
var a = _.findKey(users, function(o) { return o.age < 23; });
console.log(a);
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
var b =_.findKey(users, { 'age': 1, 'active': true });
console.log(b);
// => 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
var c =_.findKey(users, ['active', false]);
console.log(c);
// => 'fred'
 
// The `_.property` iteratee shorthand.
var d =_.findKey(users, 'active');
console.log(d);
// => 'barney'
