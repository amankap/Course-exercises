'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", '');
    }

}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (var i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                
                appData.expenses[a] = b;
            } else {
                alert("Вы ввели неправильно, повторите ещё раз");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "тг.");
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");
        } else {
            alert("Произошла ошибка");
        }

    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (var i = 0; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }

    },
    chooseIncome: function () {
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
      let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то еще?'));
      appData.income.sort();
    }
      appData.income.forEach (function (itemmassive, i) {
        alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
    });
    

}
};


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}














