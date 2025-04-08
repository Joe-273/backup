/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
	/*
	数组[1,17,5,10,13,15,10,5,16,8]的折线图如下：

			 17               16
			/ \      13      /  \
		 /   \    /  \    /    \
		/    10  10  10  /      8
	 /      \ /     \ /
	1        5       5
	
	使用贪心算法，贪 单调区间的最大/最小值，可以得出一个最长的摇摆序列如下

			 17                 16
			/ \       13       /  \
		 /   \     /  \     /    \
		/     \   /    \   /      8
	 /       \ /      \ /
	1         5        5

	得出摇摆序列为[1, 17, 5, 13, 5, 16, 8]
	*/
	const len = nums.length
	if (len <= 1) { return len }

	let pre = 0, cur = 1, ans = 1
	while (cur < len) {
		while (nums[pre] === nums[cur]) { cur++ }

		if (nums[pre] < nums[cur]) {
			while (nums[cur] <= nums[cur + 1]) { cur++ }
			ans++
		}

		if (nums[pre] > nums[cur]) {
			while (nums[cur] >= nums[cur + 1]) { cur++ }
			ans++
		}

		pre = cur++
	}
	return ans
};

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))

