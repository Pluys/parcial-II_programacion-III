export function toUpperCaseFirst(str) {
  let letters = str.split("");
  str = "";
  letters[0] = letters[0].toUpperCase();
  letters.map((letter) => (str += letter));

  return str;
}
