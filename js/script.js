'use strict';

// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//
// Не забывайте преобразовывать данные в нужный тип после запроса + написать проверку на эти данные


let calculator = {
    read() {
        this.firstNumber = +prompt('Ввведите первое число?');
        this.secondNumber = +prompt('Ввведите второе число?');
        if(isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
            return console.log(`${alert('Допусщенна ошибка при вводе, повторите')}${this.read()}`);
        }
    },
    sum() {
        return this.firstNumber + this.secondNumber;
    },

    mul() {
        return this.firstNumber * this.secondNumber;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );