// Capitalizes the first letter of a string after trimming whitespace
export function capitalize(str: string): string {
	if (!str || typeof str !== 'string') return str;

	const trimmed = str.trim();
	if (!trimmed) return str;

	return trimmed.charAt(0).toLocaleUpperCase() + trimmed.slice(1);
}
