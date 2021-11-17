/*
 * @Descripttion:
 * @version:
 * @Author: LiarCoder
 * @Date: 2021-11-17 22:16:43
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-18 01:28:22
 */

/**
 * @description: 堆排序 
 * @param {Array} arr 待排序数组
 * @return {*} undefined
 */

function heapSort(arr) {
  /**
   * 因为堆排序中需要利用数组的下标关系构建一棵完全二叉树，而如果起始下标为0的话就会导致后续
   * 计算出错，所以第一个有效元素的下标应该从1开始，所以需要在进行堆排序前特意增加一个头部元
   * 素来占位，当然，这个多余的头部元素也可以替代下面temp变量的作用，这样就不会浪费空间了
   */
  arr.unshift(0);
  initHeap(arr);
  for (let i = arr.length - 1; i >= 2; i--) {
    [arr[i], arr[1]] = [arr[1], arr[i]];
    updateHeap(arr, 1, i - 1);
  }
  arr.shift();
}

/**
 * @description: updateHeap 是用于重建一个堆结构（数组形式）的函数
 * @param {heap: array} 需要重建的堆（该堆是用数组结构存储的）
 * @param {root: number} 需要重建的堆的根节点在heap数组中的下标
 * @param {rear: number} 需要重建的堆的最后一个节点在heap数组中的下标
 * @return {*}
 */

function updateHeap(heap, root, rear) {
  /**
   * temp：用于暂存需要重建的堆的根元素，可以用heap[0]代替，反正heap[0]闲着也是闲着
   * finished：用于标识是否找到了根元素的归宿
   * parent：用于标识一个堆结构中的某个父节点
   * child：用于标识上面的parent的子节点，初始值是左子节点的下标，后续将会根据parent的两个
   *        子节点的值的大小做更新，反正要保证它标识的是较大的那个子节点
   */
  let temp = heap[root];
  let finished = false;
  let parent = root;
  let child = 2 * root;
  while (child <= rear && !finished) {
    child = child + 1 <= rear && heap[child] < heap[child + 1] ? child + 1 : child;
    if (heap[child] <= temp) {
      finished = true;
      continue;
    }
    heap[parent] = heap[child];
    parent = child;
    child = 2 * parent;
  }
  heap[parent] = temp;
}

/**
 * @description: initHeap用于初始化一个堆
 * @param {heap: array} 需要初始化的堆（该堆是用数组结构存储的）
 * @return {*}
 */

function initHeap(heap) {
  for (let i = Math.floor((heap.length - 1) / 2); i >= 1; i--) {
    updateHeap(heap, i, heap.length - 1);
  }
}

let testArr = [48, 62, 35, 77, 55, 14, 35, 98, 22, 40];
// let testArr = [48, 62, 35, 77, 55, 14, 35, 98];
// let testArr = [98, 77, 35, 62, 55, 14, 35, 48];
console.log(testArr.toString());
heapSort(testArr);
console.log(testArr.toString());

// $ node heap-sort.js
// 48,62,35,77,55,14,35,98,22,40
// 14,22,35,35,40,48,55,62,77,98