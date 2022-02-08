'use strict';
//получем загаловок "Калькулятор верстки"
const title = document.getElementsByTagName('h1')[0];


//получаем кнопки рассчитать и сброс
const calculate = document.getElementsByClassName('handler_btn');


// получение кнопки +
const screenBtn = document.querySelector('.screen-btn');


//получение элементов с классом other-items
const otherItemsPercent = document.querySelectorAll('.other-items' && '.percent');
const otherItemsNumber = document.querySelectorAll('.other-items' && '.number');


//Получить input type=range
const rollbackInput = document.querySelector('.rollback  [type=range]');


//Получить span с классом range-value
const rollbackValue = document.querySelector('.rollback .range-value');


//Получить все инпуты с классом total-input
const totalValueZero = document.getElementsByClassName('total-input')[0];
const totalValueFirst = document.getElementsByClassName('total-input')[1];
const totalValueSecond = document.getElementsByClassName('total-input')[2];
const totalValueThird = document.getElementsByClassName('total-input')[3];
const totalValueFourth = document.getElementsByClassName('total-input')[4];

//Получить все блоки с классом screen
let screenBloks = document.querySelectorAll('.screen');


//оставил логи здесь для удобства проверки чтоб не вводить данные в модалки 
console.log(title.textContent);
console.log(calculate);
console.log(screenBtn);
console.log(otherItemsNumber);
console.log(otherItemsPercent);
console.log(rollbackInput);
console.log(rollbackValue);
console.log(totalValueZero);
console.log(totalValueFirst);
console.log(totalValueSecond);
console.log(totalValueThird);
console.log(totalValueFourth);
console.log(screenBloks);


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
//проверка на строку 
const isString = function (num) {
    return isNaN((num));
};

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 16,
    workerRollback: 0,
    servisePresentPrise: 0,
    allServisePrices: 0,
    services: {},
    sum: 0,
    //проверка на число


    asking: function () {
        do {
            appData.title = prompt('как называется ваш проект', "КаЛьКулятор");
        } while (!isString(appData.title));


        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;
            do {
                name = prompt('какие типы экранов надо разработать?',
                    "Простые");
            } while (!isString(name));

            do {
                price = prompt('Сколько будет стоить данная работа?', 15000);
            } while (!isNumber(price));
            appData.screens.push({
                id: i,
                name: name,
                price: price
            });

        }

        appData.adaptive = confirm("Нужен ли адаптив?");
        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name = '';
            do {
                name = prompt('Какие дополнительные услуги еще нужны?', "домен");
            } while (!isString(name));

            do {
                price = prompt('Сколько это будет стоить?', 1000);
            } while (!isNumber(price));
            appData.services[name] = +price;
        }
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let key in appData.services) {
            appData.allServisePrices += appData.services;
        }
    },
    //функция вычисления дополнительных услуг

    //вывод скидки
    getRollbackMessage: function (price) {
        let sum = 0;
        if (price >= 30000) {
            return "даем скидку 10%";

        } else if (appData.fullPrice >= 15000 && price < 30000) {
            return "даем скидку 5%";

        } else if (appData.fullPrice < 15000 && price > 0) {
            return "скидка не предусмотрена";

        } else {
            return "Что-то пошло не так";
        }
    },

    //вычисление полной стоимости
    getFullPrice() {
        appData.fullPrice = +appData.screenPrice + appData.sum;
    },
    //откат работнику
    sumRollback: function () {
        appData.workerRollback = Math.ceil(appData.fullPrice * (appData.rollback / 100));
    },
    // Вывод первой большой буквы остальные маленькие 
    getTitle: function (a) {
        a = a.trim();
        appData.title = a[0].toUpperCase() + a.slice(1).toLowerCase();
    },
    //вычисление стоимости с учетом отката
    getServicePresentPrices: function () {
        appData.allServisePrices = appData.fullPrice - appData.workerRollback;
    },
    //вывод информации об обьекте
    logger: function () {
        console.log(appData.title);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log('Стоимость с учетом отката сотруднику = ' + appData.allServisePrices);

    },
    start: function () {
        appData.asking();
        this.addPrices();
        appData.getFullPrice();
        appData.sumRollback();
        appData.getServicePresentPrices();
        appData.getTitle(appData.title);
        appData.logger();


    }
};