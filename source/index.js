// Converts an integer into an array of digits
function digits (n) {
  return Array.from(n.toString && n.toString());
}

/* Validates a South African ID number based on the formula from
 * http://geekswithblogs.net/willemf/archive/2005/10/30/58561.aspx
 */
function validate (idInput) {
  if (idInput === null || typeof idInput === 'undefined') {
    return false;
  }

  const id = digits(idInput);

  if (id.length !== 13) return false;

  // Add up all the even digits (excluding the last)
  const a = id.slice(0, 12).reduce((sum, d, i) => {
    return i % 2 ? sum : sum + Number(d);
  }, 0);

  // Concatenate all the odd digits and multiply by two
  const b = Number(
    id.reduce((s, d, i) => i % 2 ? s + d.toString() : s, '')
  ) * 2;

  // Add `a` to the sum of all the digits in `b`
  const c = a + digits(b).reduce((sum, d) => sum + Number(d), 0);

  // Subtract the last digit of `c` from 10
  const d = 10 - digits(c).pop();

  // Validate by comparing the last digit of `d` to the last digit of the id number
  return digits(d).pop() === id[12];
}

export default validate;
