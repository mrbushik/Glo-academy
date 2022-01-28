let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 999;
let rollback = "16";
let fullPrice = 1090;
let adaptive = false;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +
    '$ Стоимость разработки сайта ' + fullPrice + '$');
//не уверен что лучше всего так разделять строку
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));