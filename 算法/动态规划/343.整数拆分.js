/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
	// // 1. 动态规划
	// // dp[i]指的是将i拆分为至少2个整数的乘积，且这个乘积最大
	// // i的拆分的乘积dp[i]可能为j*（i-j），这是拆分为两个数的时候，但不一定是最大
	// // 拆分为超过两个数的乘积为j*dp[i-j],也就是j*(i-j的拆分的最大乘积)
	// const dp = new Array(n + 1).fill(0)
	// // 因为dp[0]和dp[1]没有意义，因为0和1无法拆分为两个或两个以上的正整数
	// // 所以将dp[0]和dp[1]初始化为0，将dp[2]初始化为1
	// dp[2] = 1
	// // 其他位置的值需要通过一边遍历一边赋值
	// // 遍历
	// for (let i = 3; i <= n; i++) {
	// 	// 因为想要拆分的数最大，所以拆分为尽可能相同的几个数
	// 	// 比如10拆分为5+5或者3+3+4,拆分为1+9的乘积和2+8的乘积一定小于5+5
	// 	// 所以只需要遍历到i/2的位置就可以了
	// 	for (let j = 1; j <= i / 2; j++) {
	// 		dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
	// 	}
	// }
	// // 打印
	// // console.log(dp)
	// return dp[n]

	// 2.方法二
	// 数学原理，将n拆分为尽可能多的3,余下的数只能为2或者4
	// 10=3+3+4, 11=3+3+3+2, 12=3+3+3+3
	if (n <= 3) return n - 1;

	const quotient = Math.floor(n / 3);
	const reminder = n % 3;

	if (reminder === 0) return 3 ** quotient;
	if (reminder === 1) return 3 ** (quotient - 1) * 4;
	return 3 ** quotient * 2;
};

const case1 = 11
console.log(integerBreak(case1))
