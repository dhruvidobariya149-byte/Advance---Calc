const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

let calculated = false;

// Add values
function appendValue(value) {

    // Clear display automatically after result
    if (calculated) {
        display.value = "";
        calculated = false;
    }

    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    try {

        const expression = display.value;
        const result = eval(expression);

        // Add to history
        const li = document.createElement("li");
        li.textContent = `${expression} = ${result}`;
        historyList.prepend(li);

        // Show result
        display.value = result;

        // Mark calculation completed
        calculated = true;

    } catch {

        display.value = "Error";
    }
}