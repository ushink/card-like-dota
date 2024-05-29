# Создать SPA со списком карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта. 

Для задачи можно выбрать любое публичное api, например, отсюда https://github.com/public-apis/public-apis

Каким должно быть приложение?

- Пришедшие данные хранятся в сторе.

- На карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается лайк. Иконка должна подкрашиваться, когда залайкана.

- На карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.

- Сверху должна быть кнопка фильтра, которая по нажатию показывает только залайканые карточки. При отжатии опять показываются все карточки. 

контент карточки(текст) должен быть урезан,чтобы у карчточек была одинаковая высота
при клике на любом месте карточке(кроме иконки лайка и кнопки удаления) мы должно попадать на отдельную страницу карточки. Уже в нем мы видим полный текст карточки.Так же на этой странице должна быть кнопка вернуться к списку карточек

Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на вас.

## Стэк:

- Typescript
- React
- Redux-toolkit(rtk-query)

В каком формате сдавать ?

Ссылка на GitHub + проект выложенный на GitHub Pages