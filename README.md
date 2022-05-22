# Интернет-банкинг

## Используемые технологии:
```
Vue 3 Composition API
veeValidate, yup, jwt token, REST API, axios
```

## Структура проекта:
### Страница Авторизации пользователя
```
- авторизация пользователя через базу данных и jwt токен 
- валидация через yup и veeValidate 
- блокировка ввода данных после 3х попыток
- обработка ошибок
```

### Главная страница
```
- вывод списка заявок
- создание заявки в модальном окне с валидацией
- отправка формы заявки на сервер
- обработка ошибки при истечение срока токена
- загрузка всех заявок в таблицу с сервера
- форматирование суммы
- реализация статуса заявки, смена статуса
- добавление динамических фильтров
- страница отдельной заявки
- изменение заявки
- удаление заявки
```

### Страница помощи
```
- открытие ответов по клику на вопросе
```

### Сайдбар - сообщения
```
- открытие сообщений из сайдбара
```

### Данные для логина
```
https://vue-online-bank-f7e26.web.app
d@mail.ru / 123456
