/*
 * @Descripttion:
 * @version:
 * @Author: LiarCoder
 * @Date: 2021-11-03 21:53:47
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-03 22:07:28
 */

/**
 * @description: 直接插入排序 
 * @param {Array} arr 待排序数组
 * @return {*} undefined
 */

function insertSort(arr) {
  /**
   * cur: 当前待排序（插入）元素
   * j: 寻找插入的目标位置时的辅助指针
   */
  let cur = 0;
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    cur = arr[i];
    j = i - 1;
    while (cur < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
}

let testArr = [48, 62, 35, 77, 55, 14, 35, 98, 22, 40];
console.log(testArr.toString());
insertSort(testArr);
console.log(testArr.toString());