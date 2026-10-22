
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");

function checkInput() {
    const value = userInput.value.trim();
    const number = Number(value);

    if (value === "" || !Number.isFinite(number)) {
        result.textContent = "Please enter a valid number!";
    }
    else if (number < 10) {
        result.textContent = "The number is lower than 10";
    }
    else if (number > 10) {
        result.textContent = "The number is higher than 10";
    }
    else {
        result.textContent = "The number is equal to 10";
    }
}

checkBtn.addEventListener("click", checkInput);
