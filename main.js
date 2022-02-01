'use strict';
let title = prompt('как называется ваш проект', "title");
let screens = prompt('какие типы экранов надо разработать?',
    "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "15000");
let adaptive = confirm("Нужен ли адаптив?");
let service1 = prompt('Какие дополнительные услуги еще нужны?', "домен");
let servise1Price = +prompt('сколько это будет стоить?', "100");
let service2 = prompt('Какие дополнительные услуги еще нужны?', 'создание слайдера');
let servise2Price = +prompt('сколько это будет стоить?', '500');
let fullPrice = screenPrice + servise1Price + servise2Price;
let rollback = "16";
let workerRollback = (fullPrice * (rollback / 100));
let servisePresentPrise = fullPrice - workerRollback;
servisePresentPrise = (Math.ceil(servisePresentPrise));
let allServisePrices;
const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "даем скидку 10%";

    } else if (fullPrice >= 15000 && price < 30000) {
        return "даем скидку 5%";

    } else if (fullPrice < 15000 && price > 0) {
        return "скидка не предусмотрена";

    } else {
        return "Что-то пошло не так";
    }
}
// const getAllServisePrices = function (price1, price2) {
//     return price1 + price2;
// }

// console.log(getAllServisePrices(servise1Price, servise2Price + " test1111"));
// allServisePrices = getAllServisePrices();

console.log(getRollbackMessage(fullPrice))
console.log('Тип данных title: ' + typeof title);
console.log('Тип данных fullPrice: ' + typeof fullPrice);
console.log('Тип данных adaptive: ' + typeof adaptive);
console.log(screens.toLowerCase().split(' '));
console.log("Итоговая стоимость с учетом отката и округлением вверх " + servisePresentPrise);
console.log('Откат посреднику за работу: ' + Math.round(workerRollback));
console.log('Длина строки screens = ' + screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +
    '₽ Стоимость разработки сайта ' + fullPrice + '₽');