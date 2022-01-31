'use strict';
let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 999;
let rollback = "16";
let fullPrice = 1090;
let adaptive = false;
console.log('Тип данных title: ' + typeof title);
console.log('Тип данных fullPrice: ' + typeof fullPrice);
console.log('Тип данных adaptive: ' + typeof adaptive);
console.log('Длина строки screens = ' + screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +
    '$ Стоимость разработки сайта ' + fullPrice + '$');
console.log(screens.toLowerCase().split(' '));
let workerRollback = (fullPrice * (rollback / 100));
console.log('Откат посреднику за работу: ' + Math.round(workerRollback));
//начало урока
title = prompt('как называется ваш проект');
screens = prompt('какие типы экранов надо разработать?', screens);
// не совсем понял задание, как я понял, что пользователю
// в окне надо еще дополнительно дать подсказку с типами экранов
screenPrice = +prompt('Сколько будет стоить данная работа?');
adaptive = confirm("Нужен ли адаптив?");
let service1 = prompt('Какие дополнительные услуги еще нужны?');
let servise1Price = +prompt('сколько это будет стоить?');
let service2 = prompt('Какие дополнительные услуги еще нужны?');
let servise2Price = +prompt('сколько это будет стоить?');
fullPrice = screenPrice + servise1Price + servise2Price;
let servisePresentPrise = fullPrice - workerRollback;
servisePresentPrise = (Math.ceil(servisePresentPrise));
console.log("Итоговая стоимость с учетом отката и округлением вверх " + servisePresentPrise);
switch (true) {
    case fullPrice >= 30000:
        console.log("даем скидку 10%");
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log("даем скидку 5%");
        break;
    case fullPrice < 15000 && fullPrice > 0:
        console.log("скидка не предусмотрена");
        break;
    case fullPrice <= 0:
        console.log("Что-то пошло не так");
}