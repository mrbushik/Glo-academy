'use strict';

// let screens  = document.querySelectorAll ('.screen');
//получем загаловок "Калькулятор верстки"
const title = document.getElementsByTagName('h1')[0];


//получаем кнопки рассчитать и сброс
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];


// получение кнопки +
const buttonPlus = document.querySelector('.screen-btn');


//получение элементов с классом other-items
const otherItemsPercent = document.querySelectorAll('.other-items' && '.percent');
const otherItemsNumber = document.querySelectorAll('.other-items' && '.number');


//Получить input type=range
const rollbackInput = document.querySelector('.rollback  [type=range]');


//Получить span с классом range-value
const rollbackValue = document.querySelector('.rollback .range-value');


//Получить все инпуты с классом total-input
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

//Получить все блоки с классом screen
let screens = document.querySelectorAll('.screen');
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    allCount: 0,
    rollback: 0,
    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.allCountScreens);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        rollbackInput.addEventListener('input', appData.addRollback);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    allCountScreens: function () {
        if (appData.addScreens() !== true) {
            startBtn.removeEventListener('click', appData.allCountScreens);
            startBtn.style.opacity = '0.5';
        } else {
            appData.start();
        }
    },
    addScreens: function () {

        appData.screens.length = 0;
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value
            });
        });

        if (appData.screens.find(item => item.price === 0)) {
            return false;
        } else {
            return true;
        }
    },
    addScreenBlock: function () {
        screens = document.querySelectorAll(".screen");
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.screens.forEach(function (item) {
            appData.allCount += +item.count;
        });

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
        totalCountRollback.value = appData.servicePercentPrice;
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCount.value = appData.allCount;
    },
    addRollback: function () {
        appData.rollback = +rollbackInput.value;
        rollbackValue.textContent = appData.rollback + "%";
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
        appData.logger();
    },
    logger: function () {
        console.log(screens);
    }
};

appData.init();