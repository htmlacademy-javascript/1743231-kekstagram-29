
/**
 *Проверит длину value
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
 * @returns {boolean}
 */
function isPalindrome(value) {
  const normalized = String(value).replaceAll(' ','') .toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;

}

/**
 * Извлекает цифры из `value`;
 * @param {string | number} value
 * @returns {number}
 */
function parseDigits(value) {
  const digits = String(value).replace(/[^0-9]+/g, '');

  return digits ? Number(digits) : NaN;
}

fitsLength('Hello', 10);
isPalindrome('Лёша на полке клопа нашёл');
parseDigits('1 кефир, 0.5 батона');

/**
 * Поверит не выходит ли встреча за рамки рабочего дня.
 * @param {string} workStart - Начало рабочего дня в формате `часы:минуты`.
 * @param {string} workEnd - Конец рабочего дня в формате `часы:минуты`.
 * @param {string} meetingStart - Начало встречи в формате `часы:минуты`.
 * @param {number} meetingDuration - Продолжительность встречи в минутах.
 * @returns {boolean}
 */
function isWithinWorkingDay(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartTime = parseTime(workStart);
  const workEndTime = parseTime(workEnd);
  const meetingStartTime = parseTime(meetingStart);

  return (
    meetingStartTime >= workStartTime &&
    meetingDuration <= workEndTime - meetingStartTime
  );
}

/**
 * Извлечёт количество минут из строки вида `часы:минуты`.
 * @param {string} time
 * @returns {number}
 */
function parseTime(time) {
  const parts = time.split(':').map(Number);
  const [hours, minutes] = parts;
  const minutesPerHour = 60;

  return hours * minutesPerHour + minutes;
}

export {

  fitsLength,
  isPalindrome,
  parseDigits,
  isWithinWorkingDay,
  parseTime,
};
