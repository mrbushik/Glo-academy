'use strict';
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 16,
    workerRollback: 0,
    servisePresentPrise: 0,
    allServisePrices: 0,
    service1: 0,
    service2: 0,
    sum: 0,
    //проверка на число


    asking: function () {
        appData.title = prompt('как называется ваш проект', "КаЛьКулятор");
        appData.screens = prompt('какие типы экранов надо разработать?',
            "Простые, Сложные, Интерактивные");
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', 15000);
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив?");
    },

    //функция вычисления дополнительных услуг
    //выводит тип undefined
    getAllServisePrices: function () {
        let prise = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какие дополнительные услуги еще нужны?', "домен");
            } else if (i === 1) {
                appData.service2 = prompt('Какие дополнительные услуги еще нужны?', "хостинг");
            }
            do {
                prise = prompt('Сколько это будет стоить?', 1000);
            } while (!isNumber(prise));
            appData.sum += +prise;
        }

        return +appData.sum;
    },
    //вывод скидки
    getRollbackMessage: function (price) {
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
        return +appData.screenPrice + appData.sum;
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
        for (let key in appData) {
            console.log('Ключ: ' + key + ' ' + 'Значение ' + appData[key]);
        }

    },
    start: function () {
        appData.asking();
        appData.getAllServisePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.sumRollback();
        appData.getServicePresentPrices();
        appData.getTitle(appData.title);
        appData.logger();
        console.log(appData.title);
        console.log(this.getRollbackMessage(appData.fullPrice));
        console.log('Стоимость с учетом отката сотруднику = ' + appData.allServisePrices);
    }
};


appData.start();