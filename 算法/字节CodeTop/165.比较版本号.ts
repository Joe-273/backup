function compareVersion(version1: string, version2: string): number {
	const v1Arr: number[] = version1.split('.').map(Number)
	const v2Arr: number[] = version2.split('.').map(Number)
	while (v1Arr.length > v2Arr.length) { v2Arr.push(0) }
	while (v1Arr.length < v2Arr.length) { v1Arr.push(0) }
	for (let i = 0; i < v1Arr.length; i++) {
		const v1Num = v1Arr[i], v2Num = v2Arr[i]
		if (v1Num > v2Num) { return 1 }
		if (v1Num < v2Num) { return -1 }
	}
	return 0
};

console.log(compareVersion("1.2", "1.10.0"));

