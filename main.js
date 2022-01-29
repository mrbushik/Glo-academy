let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 999;
let rollback = "16";
let fullPrice = 1090;
let adaptive = false;
console.log('Тип данных title: ' + typeof title);
console.log('Тип данных fullPrice: ' + typeof fullPrice);
console.log('Тип данных adaptive: ' + typeof adaptive);
console.log('Длина строки screens = ' + screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +
    '$ Стоимость разработки сайта ' + fullPrice + '$');
console.log(screens.toLowerCase().split(' '));
let workerRollback = (fullPrice * (rollback / 100));
console.log('Откат посреднику за работу: ' + Math.round(workerRollback));