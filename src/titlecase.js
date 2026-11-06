// Capitalises the first letter of each word.
export function titleCase(text) {
  return text.replace(/\b[a-z]/g, (c) => c.toUpperCase());
}
