function appendValue(val) {
    document.getElementById("display").value += val;
}

function clearScreen() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}