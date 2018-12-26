const print = require('./log.js')

const arr = [1,2,3,4];
print('Create Array arr');

print('For Each Start');
arr.forEach((num) => {console.log(`${num}`)})
print('ForEach End');