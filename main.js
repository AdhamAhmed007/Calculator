let value = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button"); 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "clear") {
            value.value = "0";
        }
        else if (button.id === "backspace") {
            value.value = value.value.slice(0, -1);
            if (value.value === "") {
                value.value = "0";
            }
        }
        else if (button.id === "equal") {
            try {
                value.value = eval(value.value);
            }
            catch (error) {
                value.value = "Error";
            }
        }
        else if (button.id === "multipy") {
            value.value += "*";
        }
        else {
            if (value.value === "0") {
                value.value = button.textContent;
            }
            else {
                value.value += button.textContent;
            }
        }

    });
});
