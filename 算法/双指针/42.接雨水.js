// 因为两侧无法储存雨水，所以雨水只能存在数组柱子的低洼中
// 一开始获取两边初始位置的柱子高度
// 如果右边的柱子高，那么从左边开始计算每个位置的储水量，
// 因为储水量决定与矮一点的柱子
//   在指针向左遍历的时候，会保存当前左边的最高的柱子
//   然后当前位置的储水量等于左边最高柱子高度 - 当前高度，然后将储水量加入总储水量中
// 在这个过程中如果左边最高柱子的高度大于了右边一开始的柱子高度
// 那么就停止移动左边指针，因为储水量取决于右边的柱子
//   然后重复步骤，计算当前右指针位置储水量后加入总储水量中，再移动右指针
// 如果这个过程中，右侧的最高柱子大于左边，那么停止移动右指针，接着重复步骤
//
// 注意：过程中计算储水量都只计算当前位置的储水量，然后将其依次相加
// 且循环终止条件为两指针相遇

// 还可以通过动态规划来解决这个问题

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let left = 0
	let right = height.length - 1
	let leftMax = height[left]
	let rightMax = height[right]

	let max = 0
	while (left < right) {
		if (leftMax < rightMax) {
			left++
			leftMax = Math.max(height[left], leftMax)
			// console.log('L>>', leftMax - height[left])
			max += leftMax - height[left]
		} else {
			right--
			rightMax = Math.max(height[right], rightMax)
			// console.log('R>>', rightMax - height[right])
			max += rightMax - height[right]
		}
	}

	return max
};

const case1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const case2 = [4, 2, 0, 3, 2, 5]
console.log(trap(case1))
