/**
* @param {number} min
* @param {number} max
* @returns {number} целое положительное
*/
function pickIntegerInRange(min, max) {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
}

/**
 * @template T
 * @param {Array<T>} items
 * @returns {T}
 */
function pickItemFromArray(items) {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
}
export {
  pickItemFromArray,
  pickIntegerInRange,

};
