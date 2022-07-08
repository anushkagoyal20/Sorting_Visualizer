import React from 'react';
let array = [];
function merge(leftArr, rightArr) {
    let sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
       } else {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
         }
       }
      while (leftArr.length)
        sortedArr.push(leftArr.shift());
      while (rightArr.length)
        sortedArr.push(rightArr.shift());
      return sortedArr;
    }
const mergesort = (arr) =>{
  if (arr.length < 2) {
    return arr; }
  else {
    let midpoint = parseInt(arr.length / 2);
    let leftArr   = [];
    for(let i = 0; i < midpoint; i++){
        leftArr.push(arr[i]);
    }
    let rightArr  = [];
    for(let i = midpoint; i < arr.length; i++){
        rightArr.push(arr[i]);
    }
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
export default mergesort;