'use strict';
let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let rollback = "16";
let workerRollback = fullPrice * (rollback / 100);
let servisePresentPrise = Math.ceil(fullPrice - workerRollback);
let allServisePrices;
let service1;
let service2;
let sum = 0;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
//вывод типа переменной
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const asking = function () {
    title = prompt('как называется ваш проект', "КаЛьКулятор");
    screens = prompt('какие типы экранов надо разработать?',
        "Простые, Сложные, Интерактивные");
    screenPrice = prompt('Сколько будет стоить данная работа?');
    while (!isNumber(screenPrice)) {
        screenPrice = +prompt('Сколько будет стоить данная работа?', 15000);
    }

    adaptive = confirm("Нужен ли адаптив?");
}

//функция вычисления дополнительных услуг
//выводит тип undefined
const getAllServisePrices = function () {
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какие дополнительные услуги еще нужны?', "домен");
        } else if (i === 1) {
            service2 = prompt('Какие дополнительные услуги еще нужны?', "хостинг");
        }
        sum += +prompt('сколько это будет стоить?', 100);
    }
    return sum;
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

//вычисление полной стоимости
function getFullPrice() {
    return screenPrice + sum;
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
console.log("" + workerRollback)
asking();
getAllServisePrices(allServisePrices);
fullPrice = getFullPrice();
showTypeOf(`${getTitle(title)}`);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(typeof screenPrice + "ssssss")
console.log(fullPrice + "цена ");
console.log(screens.toLowerCase().split(' '));
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость с учетом отката сотруднику = " + getServicePresentPrices());