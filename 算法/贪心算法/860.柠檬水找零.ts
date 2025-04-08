function lemonadeChange(bills: number[]): boolean {
	let five = 0, ten = 0
	for (let i = 0; i < bills.length; i++) {
		const bill = bills[i]
		if (bill === 5) {
			five++
		}
		if (bill === 10) {
			if (five < 1) { return false }
			ten++, five--
		}
		if (bill === 20) {
			if (five > 0 && ten > 0) {
				five--, ten--
			} else if (five >= 3) {
				five -= 3
			} else {
				return false
			}
		}
	}
	return true
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));

