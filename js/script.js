'use strict';
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


appData.start();