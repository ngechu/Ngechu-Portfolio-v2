"use strict";

// let arr = [2, 3, 5, 6, 4, 2];
// console.time("timer");
// myloop: for (i in arr) {
//   console.log(i);
// }
// console.timeEnd("timer");
// let nums = [2, 3, 5, 4, 7];
// let target = 9;
// for (let i = 0; i < nums.length; i++) {}
// export function lucky_33( a, b ) {
// 	if(a==33||b==33){
// 	return true
// 	}else{
// 	if((a+b)==33)
// 		return true
// 	}
// 	return false;
// }
var arr = [-1, 0, 1, 2, -1, -4];

var threeSum = function threeSum(nums) {
  nums.reduce(function (sum, current) {
    return sum + current;
  });
};

console.log(threeSum(arr));
arr.reduce(function (sum, current) {
  console.log(current);
});