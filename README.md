# algorithm-js-learning

## Merge Sort

### Reference
+ [Merge Sort Algorithm in JavaScript](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)
+ [JavaScript Mergesort: Top-Down vs Bottom-Up](https://www.akawebdesign.com/2012/04/13/javascript-mergesort-top-down-vs-bottom-up/)

### Questions
#### 1. 
实现自底向上归并排序的时候，遇到了使用splice导致`RangeError: Maximum call stack size exceeded`的问题，待研究。参考资料：[stackoverflow](https://stackoverflow.com/questions/44959025/rangeerror-maximum-call-stack-size-exceeded-caused-by-array-splice-apply)

#### 2. 
`Array.prototype.sort` 如何实现根据多个条件进行排序。 参考：[stackoverflow](https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields/38037580)

```JavaScript
  // 这种排序方式的注意点是什么 （递进关系）
  // 缺陷是什么（多次排序）
  [].sort().sort().sort()
```