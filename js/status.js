/**
 * @param {StatusType} type
 */
function renderStatus(type) {
  /**
   * @type {HTMLTemplateElement}
   */
  const statusTemplate = document.querySelector(`#${type}`);
  const status = /** @type {Element} */ (statusTemplate.content.querySelector(`.${type}`)
  );
  showStatus(status);
}
/**
 * @param {Element} status
 */
function showStatus (status){
  status.addEventListener('click', onStatusClick);
  document.addEventListener('keydown', onDocumentKeydown, true);
  document.body.append(status);
}

/**
 * @param {Element} status
 */
function hideStatus(status) {
  status.remove();
  status.removeEventListener('click', onStatusClick);
  document.removeEventListener('keydown', onDocumentKeydown, true);
}

/**
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function onStatusClick(event) {
  if (event.target.matches('section, button')) {
    hideStatus(event.currentTarget);
  }
}

/**
 * @param {KeyboardEvent} event
 */
function onDocumentKeydown(event) {
  if (event.key.startsWith('Esc')) {
    hideStatus(document.querySelector('.success, .error'));
    event.stopPropagation();
  }
}
export default renderStatus;
