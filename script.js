const inputValue = document.getElementById("user-input");

function display(value) {
    if (inputValue.value === "0" || inputValue.value === "" || inputValue.value === null) {
        inputValue.value = value;
    } else {
        inputValue.value += value;
    }
}

function deleteValue() {
    inputValue.value = inputValue.value.slice(0, -1);
    if (inputValue.value === "") {
        inputValue.value = "0";
    }
}

function calculate() {
    inputValue.value = eval(inputValue.value);
}

function clearInput() {
    inputValue.value = "0";
}