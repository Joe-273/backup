// 思路：使用第0行和第0列来记录需要置零的行和列
// 首先遍历矩阵，然后修改第0行和第0列，表示需要置0 的行和列
// 比如：
// [1, 1, 1]
// [1, 0, 1]
// [1, 1, 1]
// 遍历结束后：
// [1, 0, 1]
// [0, 0, 1]
// [1, 1, 1]
// 在遍历的过程中修改第0行和第0列，对后续遍历不产生影响
// 因为修改的都是已经遍历过的位置
// 注意：如果矩阵的0, 0位置是0，我将这里的0表示为该列需要置0
// （当然也可以表示该行需要置零，根据以下置0的顺序决定）
// 然后使用一个变量`zeroRow`来表示改行需要置零
//
// 1. 然后根据第0行和第0列，将第0行和第0列除外的位置去置零
// 2. 再将第0列置0（不包括0, 0的位置
// 3. 根据`zeroRow`的值，将第0列置0（不包括0, 0的位置
// 过程演示：
// [ 1, 1, 2, 1 ]
// [ 0, 4, 5, 0 ]
// [ 1, 3, 1, 5 ]
// 遍历矩阵：
// [ 1, 1, 2, 0* ]
// [ 0, 4, 5, 0  ]
// [ 1, 3, 1, 5  ]
// 置零第1步：
// [ 1, 1, 2, 0 ]
// [ 0, 0, 0, 0 ]
// [ 1, 3, 1, 0 ]
// 置零第2步：
// [ 0*, 1, 2, 0 ]
// [ 0 , 0, 0, 0 ]
// [ 0 , 3, 1, 0 ]
// 置零第3步：
// 因为第0行已经被置零了
// 所以需要通过`zeroRow`来判断是否将第0行置零
// [ 0, 1, 2, 0 ]
// [ 0, 0, 0, 0 ]
// [ 0, 3, 1, 0 ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	const rows = matrix.length
	const cols = matrix[0].length
	let zeroRow = false

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (matrix[row][col] === 0) {
				matrix[0][col] = 0
				if (row === 0) {
					zeroRow = true
				} else {
					matrix[row][0] = 0
				}
			}
		}
	}

	// 根据第0行和第0列，将第0行和第0列除外的位置去置零
	for (let row = 1; row < rows; row++) {
		for (let col = 1; col < cols; col++) {
			if (matrix[0][col] === 0 || matrix[row][0] === 0) {
				matrix[row][col] = 0
			}
		}
	}

	// 将第0列置零
	if (matrix[0][0] === 0) {
		for (let row = 1; row < rows; row++) {
			matrix[row][0] = 0
		}
	}

	// 将第0行置零
	if (zeroRow) {
		for (let col = 0; col < cols; col++) {
			matrix[0][col] = 0
		}
	}

	// for (const line of matrix) {
	// 	console.log(line)
	// }
};

const case1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
const case2 = [[1, 1, 2, 1], [0, 4, 5, 0], [1, 3, 1, 5]]
console.log(setZeroes(case2))
