// Выведение цифр в input:
function addToDisplay(value) {
    let display = document.getElementById("display");
    if (value === '/' && display.value.slice(-1) === '0') {
        display.value = 'Error'; // Если делится на ноль, то ошибка
        return;
    }
    if (/[+\-/*]/.test(value) && /[+\-/*]/.test(display.value.slice(-1))) {
        return; // Если оба символа являются знаками, прекращаем выполнение функции
    }
    if (value === '.' && display.value.slice(-1) === '.') {
        return; // Если оба символа являются точками, прекращаем выполнение функции
    }
    display.value += value;
}

// Вычисление
function calculate() {
    let display = document.getElementById("display");
    let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else if (result === Infinity || result === -Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
}

// Кнопка Clear
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    let display = document.getElementById("display");
    display.value = ""; // Очистка значения в поле ввода
});

// Вывод результата
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let value = this.getAttribute("data-value"); //Получение значения атрибута "data-value" текущего элемента, на котором произошло событие "click"
        addToDisplay(value);
    });
}
document.getElementById("equals").addEventListener("click", calculate);
