# Библиотека для работы с cookie в JS

Набо функций для получения, установки и удаления cookie в JavaScript.
Все cookies в скриптах обрабатываются только для текущего домена.

## getCookie

Получает cookie по указанному имени

### Аргументы
- name - имя cookie, значение которой необходимо получить

### Результат
Строка со значение, или undefined, если ничего не найдено

### Пример
```js
let PHPSESID = getCookie("PHPSESID");

if(PHPSESID !== undefined) {
  // в случае успешного получения, выводим в консоль значение cookie
  console.log("PHPSESID => ", PHPSESID);
}
```

## setCookie

Устанавливает cookie с указанным именем в значение value с дополнительными параметрами options.
Для утсановки используется простое присвоение строки в document.cookie = NewCookie;
По умолчанию эта функция устанавливает параметр path="/" - cookie будет отправляться со всеми запросами этого домена.

### Аргументы
- name - имя cookie, значение которой необходимо установить
- value - строка с новым значение cookie
- options - объект с дополнительными параметрами cookie, здесь можно задать, например, параметры max-age и др.

Подробнее о параметрах cookie - https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Set-Cookie

### Результат
Функция ничего не возвращает.

### Пример
```js
// устанавливает cookie с именем UserId в значение 123 сроком на 86400 секунд - 1 сутки
setCookie("UserId", 123, {"max-age": 86400});
```

## deleteCookie

Удаляет cookie с указанным именем. Так же можно передать дополнительные параметры для указания разделов сайта.

### Аргументы
- name - имя cookie, которую необходимо удалить
- options - объект с дополнительными параметрами cookie, здесь можно задать, например, параметр path, указывающий к какому разделу отнсится удаляемая cookie

### Результат
Функция ничего не возвращает.

### Пример
```js
// удаляет cookie с именем UserId для раздела admin, если такая была установлена ранее
deleteCookie("UserId", {"parh": "/admin/"});

// удаляет cookie с именем UserId для всео домена
deleteCookie("UserId", {"parh": "/admin/"});
```

