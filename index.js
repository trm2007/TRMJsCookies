/**
 * возвращает куки с указанным name,
 * или undefined, если ничего не найдено
 * 
 * @param {String} name 
 */
export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Устанавливает значение cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Object} options 
 */
export function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

/**
 * Удаляет cookie
 * @param {String} name 
 */
export function deleteCookie(name, options) {
  setCookie(name, "", {
    'max-age': -1,
    ...options
  })
}