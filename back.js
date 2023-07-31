function display(value) {
    document.getElementById("visual").value += value;
}

function del() {
    document.getElementById("visual").value=("");
}
function DONE() {
    var displayValue = document.getElementById("visual").value;
    var result;

    try {
        result = eval(displayValue);
    } catch (error) {
        result = "error!";
    }

    document.getElementById("visual").value = result;
}
