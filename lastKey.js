var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true },
  'pratibha': { 'age': 8,  'active': true }
};
const _ = require('lodash');
var c = _.findLastKey(users, function(o) { return o.age < 40; });
console.log(c);
// => returns 'pebbles' assuming `_.findKey` returns 'barney'

// The `_.matches` iteratee shorthand.
var a= _.findLastKey(users, { 'age': 36, 'active': true });
console.log(a);
// => 'barney'

// The `_.matchesProperty` iteratee shorthand.
var b=_.findLastKey(users, ['active', false]);
console.log(b);
// => 'fred'

// The `_.property` iteratee shorthand.
var d=_.findLastKey(users, 'active');
console.log(d);
// => 'pebbles'

var p =_.floor(7.005);
console.log(p);
