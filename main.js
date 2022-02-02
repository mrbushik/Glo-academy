'use strict';
let title = prompt('как называется ваш проект', "КаЛьКулятор");
let screens = prompt('какие типы экранов надо разработать?',
    "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', 5000);
let adaptive = confirm("Нужен ли адаптив?");
let service1 = prompt('Какие дополнительные услуги еще нужны?', "домен");
let servise1Price = +prompt('сколько это будет стоить?', 100);
let service2 = prompt('Какие дополнительные услуги еще нужны?',
    'создание слайдера');
let servise2Price = +prompt('сколько это будет стоить?', 500);
let fullPrice = screenPrice + servise1Price + servise2Price;
let rollback = "16";
let workerRollback = fullPrice * (rollback / 100);
let servisePresentPrise = Math.ceil(fullPrice - workerRollback);
let allServisePrices;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

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


//первое заданние 4 урок
//функция вычисления дополнительных услуг
const getAllServisePrices = function (price1, price2) {
    return price1 + price2;
}

//вычисление полной стоимости
function getFullPrice() {
    return screenPrice + allServisePrices;
}

// Вывод первой большой буквы остальные маленькие 
const getTitle = function (a) {
    a = a.trim();
    return a[0].toUpperCase() + a.slice(1).toLowerCase();
}
//вычисление стоимости с учетом отката
const getServicePresentPrices = function () {
    return fullPrice - workerRollback;
}


allServisePrices = getAllServisePrices(servise1Price, servise2Price);
fullPrice = getFullPrice();
showTypeOf(`${getTitle(title)}`);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(' '));
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость с учетом отката сотруднику = " + getServicePresentPrices());