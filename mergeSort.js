const merge = require('./merge')

function mergeSort(unsortedArray) {
  // no need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) return unsortedArray
  // in order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2)

  // this is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle)
  const right = unsortedArray.slice(middle)

  const _sortedLeft = mergeSort(left)
  const _sortedRight = mergeSort(right)

  // optimization for merge sort with nearly sorted array
  if (_sortedLeft[middle - 1] < _sortedRight[0]) {
    return [..._sortedLeft, ..._sortedRight]
  }
  // using recursion to combine the left and right
  return merge(_sortedLeft, _sortedRight)
}

module.exports = mergeSort
