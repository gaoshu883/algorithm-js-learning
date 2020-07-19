function generateArray(n) {
  return [...Array(n)].map(_ => Math.ceil(Math.random() * n))
}
module.exports = generateArray
