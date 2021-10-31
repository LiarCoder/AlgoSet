/*
 * @Descripttion: 冒泡排序
 * @version: 0.1
 * @Author: LiarCoder
 * @Date: 2021-11-01 00:25:59
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-01 00:57:05
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let testArr = [48, 62, 35, 77, 55, 14, 35, 98, 22, 40];
console.log(testArr.toString());
bubbleSort(testArr);
console.log(testArr.toString());
