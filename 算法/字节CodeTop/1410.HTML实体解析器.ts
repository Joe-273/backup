function entityParser(text: string): string {
	const entityMap: { [key: string]: string } = {
		'&frasl;': '/',
		'&apos;': "'",
		'&quot;': '"',
		'&amp;': '&',
		'&gt;': '>',
		'&lt;': '<'
	}
	const regex = new RegExp(Object.keys(entityMap).join('|'), 'g')

	return text.replace(regex, (match) => entityMap[match])
};

console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."));

