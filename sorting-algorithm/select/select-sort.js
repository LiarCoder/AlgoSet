/*
 * @Descripttion:
 * @version:
 * @Author: LiarCoder
 * @Date: 2021-11-17 21:42:04
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-17 22:00:29
 */

/**
 * @description: 简单选择排序 
 * @param {Array} arr 待排序数组
 * @return {*} undefined
 */

function selectSort(arr) {
  /**
   * minValIdx: 在每一趟的排序中，保存数组中最小值的下标
   * 外层for循环用于遍历arr数组
   * 内层for循环用于寻找某一趟排序过程中所找到的最小值的下标
   * 找到最小值后，让其与外层for循环中的当前遍历元素交换位置
   */
  for (let i = 0; i < arr.length; i++) {
    let minValIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValIdx]) {
        minValIdx = j;
      }
    }
    [arr[i], arr[minValIdx]] = [arr[minValIdx], arr[i]];
  }
}

let testArr = [48, 62, 35, 77, 55, 14, 35, 98, 22, 40];
console.log(testArr.toString());
selectSort(testArr);
console.log(testArr.toString());

// $ node select-sort.js
// 48,62,35,77,55,14,35,98,22,40
// 14,22,35,35,40,48,55,62,77,98