const merge = require('./merge')

// Bottom Up merge sort
function mergeSortBU(inputArray) {
  let size = 1,
    length = inputArray.length,
    loop = true
  // layer iterate
  while (loop) {
    // iterate in a layer
    // console.log('size: ', size)
    for (let i = 0; i < length; i += size) {
      const middle = Math.floor(size / 2)
      const left = inputArray.slice(i, i + middle)
      const right = inputArray.slice(i + middle, i + size)
      const _sortedArray = merge(left, right)
      const len = Math.min(length, i + size)
      // console.log('debug...', left, right, _sortedArray)
      for (let k = i; k < len; k++) {
        inputArray[k] = _sortedArray[k - i]
      }
      // NOTE RangeError: Maximum call stack size exceeded 800000
      // inputArray.splice(i, size, ..._sortedArray)
    }
    size >= length ? (loop = false) : (size *= 2)
  }
  return inputArray
}

module.exports = mergeSortBU
