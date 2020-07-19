const generateArray = require('./generateArray.js');
const mergeSort = require('./mergeSort.js');
const mergeSortBU = require('./mergeSortBU.js');

const unsortedArray = generateArray(800000);
console.log('mergeSort cost: ');
console.time('merge sort');
mergeSort(unsortedArray);
console.timeEnd('merge sort');

console.log('mergeSortBU cost: ');
console.time('mergeBU sort');
mergeSortBU(unsortedArray);
console.timeEnd('mergeBU sort');

// console.log('unsortedArray: ', unsortedArray);
// console.log('mergeSort: ', mergeSort(unsortedArray));
// console.log('mergeSortBU: ', mergeSortBU(unsortedArray));