// merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0

  // we will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex])
      leftIndex++
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++
    }
  }
  // we need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

module.exports = merge
