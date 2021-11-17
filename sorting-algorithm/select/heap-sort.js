/*
 * @Descripttion:
 * @version:
 * @Author: LiarCoder
 * @Date: 2021-11-17 22:16:43
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-11-18 00:45:02
 */


function heapSort(arr) {
  arr.unshift(0);
  initHeap(arr);
  for (let i = arr.length - 1; i >= 2; i--) {
    [arr[i], arr[1]] = [arr[1], arr[i]];
    updateHeap(arr, 1, i - 1);
  }
  arr.shift();
}

function updateHeap(heap, root, rear) {
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