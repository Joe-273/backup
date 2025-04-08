function convert(s: string, numRows: number): string {
	if (numRows === 1) { return s }
	const rows: string[] = new Array(numRows).fill('')
	let row = 0, dir = false
	for (let i = 0; i < s.length; i++) {
		rows[row] += s[i]
		if (row === 0 || row === numRows - 1) {
			dir = !dir
		}
		row += dir ? 1 : -1
	}
	return rows.join('')
};

console.log(convert("PAYPALISHIRING", 3));

