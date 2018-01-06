const notes= require('./notes.js');
//console.log (`My age is ${notes.age} `);//im using back tick
//console.log(addNote());
//var res = notes.addNote();
//console.log(res);
console.log('Result:', notes.add(9, -2));
const _ = require('lodash');
//console.log(_.isString('hhhg'));//it reture the output like true and false isString checks the parameter is string or not
console.log(_.isString(9));
// var FilterArray =
// _.uniq(['hiii','prati','hiii','rama']);
var filteredArray = _.uniq(['hiii','prati','hiii','rama']);//uniq Creates a duplicate-free version of an array
console.log(filteredArray);

const EventEmitter = require('events');
console.log(EventEmitter);
