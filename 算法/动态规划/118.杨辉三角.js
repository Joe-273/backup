/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	const dp = new Array(numRows)
	dp[0] = [1]
	if (numRows === 1) {
		return dp
	}
	dp[1] = [1, 1]
	if (numRows === 2) {
		return dp
	}

	for (let i = 2; i < numRows; i++) {
		const lastRow = dp[i - 1]
		const curRow = new Array(i + 1)
		curRow[0] = 1
		for (let j = 1; j < i; j++) {
			curRow[j] = lastRow[j - 1] + lastRow[j]
		}
		curRow[i] = 1
		dp[i] = curRow
	}

	return dp
};

const case1 = 6
console.log(generate(case1))
