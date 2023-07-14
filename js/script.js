//Выведение цифр в input:
function addToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    let display = document.getElementById("display");
    if (display.value.includes('..')) {
        alert('Error');
        return;
    }
    let result = eval(display.value); //Функция Eval вычисляет строковое выражение и возвращает его значение
    if (display.value === "") result = 0;
    display.value = result;
}

let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let value = this.getAttribute("data-value"); //Получение значения атрибута "data-value" текущего элемента, на котором произошло событие "click"
        addToDisplay(value);
    });
}
document.getElementById("equals").addEventListener("click", calculate);
