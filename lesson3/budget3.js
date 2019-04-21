'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true

};

function chooseExpenses() {
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

}
chooseExpenses();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();



function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "тг.");
}
detectDayBudget();




function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка");
    } else {
        alert("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (var i = 0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();

//let i = 0;
/*while (i < 2) {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        alert("Вы ввели неправильно, повторите ещё раз");
        i--;
    }
    i++;
};*/

/*do {
   
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        alert("Вы ввели неправильно, повторите ещё раз");
        i--;
    }
    i++;
} while (i < 2);*/


/*switch (appData.moneyPerDay) {
    case appData.moneyPerDay < 100:
        console.log("Минимальный уровень достатка");
        break;
    case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
        console.log("Средний уровень достатка");
        break;
    case appData.moneyPerDay > 2000:
        console.log("Высокий уровень достатка");
        break;
   
}*/