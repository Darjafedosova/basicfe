// Функции

/*
    функция - блок кода, в котором описана последовательность действий (алгоритм)

    функция решает следующие проблемы:
    1. разделяет код на отдельные независимые блоки, которые можно вызвать при надобности
    2. уменьшить дублирование кода
    3. код становится более структурированным
    4. функции могут подстраиваться и работать с разными значениям

    для создания функции в js используется ключевое слово function

    function fnName(аргумент1, аргумент2) {
        тело функции
    }
    fnName - название функции (содержит глагол)
    аргумент1, аргумент2 - входные данные
    тело функции - алгоритм действий, которые нужно выполнить
*/

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(10, 15)) // старт, вызов функции

// console.log(10 + 15)
// console.log(20 + 20)
/*
    функция заканчивает свое выполнение с результатом
*/

/*
    return - определяет значение, которое "вернет" функция
        после return никакие действия выполняться не будут
*/

// создать функцию, которая принимает имя и возвращает в консоли строку
// function greeting(name) {
//     console.log(`Привет ${name}`)
// }

// greeting("Arsen") // Привет, Арсен
// greeting("Vlad") // Привет, Влад


// console.log(`Привет, Арсен`)
// console.log(`Привет, Влад`)


// Создать функцию, которая будет принимать цену продукта и процент скидки
// а возвращать итоговую цену со скидкой
// function calcDiscount(price, sale) {
//     return price - (price * sale / 100)
// }

// console.log(calcDiscount(5000, 50)) // Вызов функции подсчета скидки товара, который стоит 5000 со скидкой 50%
// console.log(calcDiscount(10000, 20))
/*
    6000, 10
    return 6000 - (6000 * 10 / 100) = 5400
*/

// Задача. Создать функцию, которая запрашивает число и выводит квадрат этого числа в консоль
// function square() {
//     const number = +prompt("Введите число")
//     const square = number ** 2
//     console.log(square)
// }
// square()
/*
    Math.pow(число, степень)
*/

// Задача. Создать функцию, которая получает в аргументы два числа
// и выводит наибольшее в консоли. 
// fnName(10, 15) // 15


// Задача. Создать функцию, которая принимает текст уведомления и ее цвет.
// В консоли отобразить <div></div>, в который передать цвет в style и текст внутри div
function showNotification(text, color) {
    console.log(`<div style="background-color: ${color}"> ${text} </div>`)
}

// Функционал авторизации пользователя
showNotification("Вы успешно вошли в систему", "green")

// Функционал добавления элемента в корзину
showNotification("Вы успешно добавили продукт в корзину", "yellow")
