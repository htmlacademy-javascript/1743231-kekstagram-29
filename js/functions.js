/**
 *Проверяет длину value
 * @param {string} value
 * @param {number}length
 * @returns {boolean}
 */
function fitsLength(value, length) {
  return value.length <= length;
}


/**
 * Проверит, является ли `value` палиндромом.
 * @param {string | number} value
 * @param {boolean}
 */
function isPalindrome(value) {
  const normalized = String(value).replaceAll(' ','') .toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;

}
/**
 * Извлекает цифры из `value`;
 * @param {string | number} value
//  * @param {number}
 */
function parseDigits(value) {
  const digits = String(value).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;


}

fitsLength('Hello', 10);
isPalindrome('Лёша на полке клопа нашёл');
parseDigits('1 кефир, 0.5 батона');
