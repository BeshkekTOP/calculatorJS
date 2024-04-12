let num1 = parseFloat(prompt('Введите первое число:'));
let operation = prompt('Выберите операцию: +, -, *, /');
let num2 = parseFloat(prompt('Введите второе число:'));
let result;

if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {

    if (num2 === 0) {
        alert('Ошибка: деление на ноль');
    } else {
        result = num1 / num2;
    }
} else {

    alert('Некорректная операция. Повторите ввод.');
}


if (result !== undefined) {
    alert(`Результат: ${result}`);
}