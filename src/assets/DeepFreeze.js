export function deepFreeze(obj) {
	Object.keys(obj).forEach(name => {
		const prop = obj[name];
		if (typeof prop === 'object' && prop !== null)
			deepFreeze(prop);
	});
	return Object.freeze(obj);
}