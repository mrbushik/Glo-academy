'use strict';
let title = prompt('как называется ваш проект');
let screens = prompt('какие типы экранов надо разработать?',
    "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm("Нужен ли адаптив?");
let service1 = prompt('Какие дополнительные услуги еще нужны?');
let servise1Price = +prompt('сколько это будет стоить?');
let service2 = prompt('Какие дополнительные услуги еще нужны?');
let servise2Price = +prompt('сколько это будет стоить?');
let fullPrice = screenPrice + servise1Price + servise2Price;
let rollback = "16";
let workerRollback = (fullPrice * (rollback / 100));
console.log('Откат посреднику за работу: ' + Math.round(workerRollback));
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
console.log('Тип данных title: ' + typeof title);
console.log('Тип данных fullPrice: ' + typeof fullPrice);
console.log('Тип данных adaptive: ' + typeof adaptive);
console.log('Длина строки screens = ' + screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +
    '₽ Стоимость разработки сайта ' + fullPrice + '₽');
console.log(screens.toLowerCase().split(' '));