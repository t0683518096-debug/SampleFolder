	
function performOperationA() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
            let result = add(num1, num2);

            // Display the result
            displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
    }
    
function performOperationS() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
            let result = soustraction(num1, num2);

            // Display the result
            displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
    }
    
function performOperationM() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
            let result = multiply(num1, num2);

            // Display the result
            displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
    }
    
function performOperationD() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
            let result = d(num1, num2);

            // Display the result
            displayResult(result);
        } else {
            displayResult('Please enter valid numbers');
        }
    }
    
function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a + b;
}

function soustraction(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a - b;
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    try {
        r=a / b
    }
    catch {
        alert("le diviseur ne peut pas être nul")
        return 0
    }
    // Multiply the numbers
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Le resultat est : ${result}`;
}
            
    