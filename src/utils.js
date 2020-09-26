export function random(array) {
  let random = Math.floor(Math.random() * (array[0].items.results.length - 1));
  return random;
}
