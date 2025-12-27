"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 50;
var name = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
//
var anything = -20;
anything = 'Text';
anything = {};
//
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
//
var person = ['Max', 21];
//
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus[LoadingStatus["LOADING"] = 0] = "LOADING";
    LoadingStatus[LoadingStatus["READY"] = 1] = "READY";
})(LoadingStatus || (LoadingStatus = {}));
//
var value;
//
var mode;
//
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=app.js.map