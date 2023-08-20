function sump(num) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum += nums[i];
    }
  }
  return sum;
}

const nums = [3, -4, 6, 0, -1, 6];
const result = sump(nums);
console.log(result);