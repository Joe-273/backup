// 求这个的面积，最好的办法是使用双指针
// 面积值为 min(leftHeight, rightHeight) * (right - left)
// 然后判断左指针和右指针的高度，移动小的指针
// 因为要求的是最大值，应该尽可能保留大的数组
// 所以移动高度小的指针，直到找到下一个 高度比当前大的位置
// 否则无法面积不可能比上一次大

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let left = 0
	let right = height.length - 1
	let max = 0
	while (left < right) {
		const lh = height[left]
		const rh = height[right]
		max = Math.max(max, Math.min(lh, rh) * (right - left))

		if (lh <= rh) {
			// 指针跳跃
			let nextLeft = left + 1
			while (nextLeft < right && height[nextLeft] <= lh) {
				nextLeft++
			}
			left = nextLeft
		} else {
			// 指针跳跃
			let nextRight = right - 1
			while (nextRight < left && height[nextRight] <= rh) {
				nextLeft--
			}
			right = nextRight
		}
	}
	return max
};

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const height2 = [1, 1]
console.log(maxArea(height1))
