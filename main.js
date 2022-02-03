'use strict';
let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let rollback = 16;
let workerRollback;
let servisePresentPrise = Math.ceil(fullPrice - workerRollback);
let allServisePrices;
let service1;
let service2;
let sum = 0;


//проверка на число
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

//вывод типа переменной
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}
//вопросы 
const asking = function () {
    title = prompt('как называется ваш проект', "КаЛьКулятор");
    screens = prompt('какие типы экранов надо разработать?',
        "Простые, Сложные, Интерактивные");
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?', 15000);
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив?");
}

//функция вычисления дополнительных услуг
//выводит тип undefined
const getAllServisePrices = function () {
    let prise = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какие дополнительные услуги еще нужны?', "домен");
        } else if (i === 1) {
            service2 = prompt('Какие дополнительные услуги еще нужны?', "хостинг");
        }
        // do {
        //     prise = +prompt('сколько это будет стоить?', 100);
        //     sum += prise;
        // } while (!isNumber(prise));
        prise = prompt('Сколько это будет стоить?');
        do {
            prise = prompt('Сколько это будет стоить?');
        } while (!isNumber(prise));

    }

    return +sum;
}

//вывод скидки
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

const sumRollback = function () {
    workerRollback = fullPrice * (rollback / 100);
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
asking();
getAllServisePrices(allServisePrices);
fullPrice = getFullPrice();
sumRollback();


showTypeOf(`${getTitle(title)}`);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(screens.toLowerCase().split(' '));
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость с учетом отката сотруднику = " + getServicePresentPrices());