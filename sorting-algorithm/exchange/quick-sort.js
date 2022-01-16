/*
 * @Description: 快速排序
 * @Version: 0.1.0
 * @Author: LiarCoder
 * @Date: 2022-01-17 00:39:30
 * @LastEditors: LiarCoder
 * @LastEditTime: 2022-01-17 01:59:33
 */

/* 
更新：2022年1月17日24:39:51
> 参考：[排序与搜索 - 面试助力，算法  101：JavaScript 描述](https://101.zoo.team/pai-xu-yu-sou-suo)
更新：2022年1月17日01:55:00
> 参考：[快速排序(三种算法实现和非递归实现)_Maple的博客-CSDN博客_快速排序非递归](https://blog.csdn.net/qq_36528114/article/details/78667034)
更新：2022年1月17日01:55:35
> 参考：[快速排序的递归方式和非递归方式 - ljy2013 - 博客园](https://www.cnblogs.com/ljy2013/p/4003412.html)
*/

/* 
时间复杂度：O(nlog2n)
空间复杂度：O(nlog2n)
稳定性：不稳定
*/

/**
 * @description: 一次快速排序的过程（方法一）
 * @param {Array} arr 待排序数组
 * @param {Number} low 一次快速排序中的前指针索引
 * @param {Number} high  一次快速排序中的后指针索引
 * @return {Number} 返回本次快排之后的基准的最终位置
 */
function partition1(arr, low, high) {
  let pointer = low;
  // pivot 意为中枢、轴，用于存储基准元素的值
  let pivot = arr[high];

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
      pointer++;
    }
  }
  [arr[high], arr[pointer]] = [arr[pointer], arr[high]];
  return pointer;
}

/**
 * @description: 一次快速排序的过程（方法二）
 * @param {Array} arr 待排序数组
 * @param {Number} low 一次快速排序中的前指针索引
 * @param {Number} high  一次快速排序中的后指针索引
 * @return {Number} 返回本次快排之后的基准的最终位置
 */
function partition2(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] >= pivot) {
      high--;
    }
    if (low < high) {
      arr[low] = arr[high];
      low++;
    }
    while (low < high && arr[low] <= pivot) {
      low++;
    }
    if (low < high) {
      arr[high] = arr[low];
      high--;
    }
  }
  arr[low] = pivot;
  return low;
}

/**
 * @description: 递归版本的快速排序
 * @param {Array} arr 待排序数组
 * @param {Number} low 一次快速排序中的前指针索引
 * @param {Number} high  一次快速排序中的后指针索引
 * @return {Array} 返回排序后的数组（原数组）
 */
function quickSortWithRecursion(arr, low, high) {
  if (low < high) {
    let pivotPosition = partition(arr, low, high);
    quickSortWithRecursion(arr, low, pivotPosition - 1);
    quickSortWithRecursion(arr, pivotPosition + 1, high);
  }
  return arr;
}

/**
 * @description: 非递归版本的快速排序
 * @param {Array} arr 待排序数组
 * @param {Number} low 一次快速排序中的前指针索引
 * @param {Number} high  一次快速排序中的后指针索引
 * @return {Array} 返回排序后的数组（原数组）
 */
function quickSortNoRecursion(arr, low, high) {
  // 用一个数组来显式地维护一个栈结构，注意后面进栈和出栈的顺序关系
  let stack = [];
  stack.push(low, high);
  while (stack.length) {
    let back = stack.pop();
    let front = stack.pop();
    let pivotPosition = partition(arr, front, back);
    if (pivotPosition - 1 > front) {
      stack.push(front, pivotPosition - 1);
    }
    if (pivotPosition + 1 < back) {
      stack.push(pivotPosition + 1, back);
    }
  }
  return arr;
}

// let partition = partition1;
let partition = partition2;

let testArr = [48, 62, 35, 77, 55, 14, 35, 98, 22, 40];
// let testArr = [];
console.log(testArr.toString());
// quickSortWithRecursion(testArr, 0, testArr.length - 1);
quickSortNoRecursion(testArr, 0, testArr.length - 1);
console.log(testArr.toString());

/* 
2022年1月17日00:56:14——递归法 + partition1
$ node quick-sort.js
48,62,35,77,55,14,35,98,22,40
14,22,35,35,40,48,55,62,77,98

不用对空数组做特殊处理


2022年1月17日01:25:15——非递归法 + partition1
$ node quick-sort.js
48,62,35,77,55,14,35,98,22,40
14,22,35,35,40,48,55,62,77,98

也不用对空数组做特殊处理


2022年1月17日01:49:33——递归法 + partition2
$ node quick-sort.js
48,62,35,77,55,14,35,98,22,40
14,22,35,35,40,48,55,62,77,98

也不用对空数组做特殊处理


2022年1月17日01:51:17——非递归法 + partition2
$ node quick-sort.js
48,62,35,77,55,14,35,98,22,40
14,22,35,35,40,48,55,62,77,98

也不用对空数组做特殊处理
*/
