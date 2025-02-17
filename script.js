function calculateY() {
    let x = parseFloat(prompt("Enter a value for x:"));
    if (!isNaN(x)) {
        let y = 9 * x + 5.3;
        document.getElementById("output").innerText = `y = ${y}`;
    } else {
        document.getElementById("output").innerText = "Please enter a valid number.";
    }
}
